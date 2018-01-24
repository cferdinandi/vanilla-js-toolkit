<?php

	/**
	 * Automated deploy from GitHub
	 *
	 * https://developer.github.com/webhooks/
	 * Template from ServerPilot (https://serverpilot.io/community/articles/how-to-automatically-deploy-a-git-repo-from-bitbucket.html)
	 * Hash validation from Craig Blanchette (http://isometriks.com/verify-github-webhooks-with-php)
	 */

	// Variables
	$secret = getenv('GH_DEPLOY_SECRET');
	$repo_dir = '/srv/users/serverpilot/apps/vanillajstoolkit/build';
	$web_root_dir = '/srv/users/serverpilot/apps/vanillajstoolkit/public';
	$rendered_dir = '/public';
	$hugo_path = '/usr/local/bin/hugo';

	// Validate hook secret
	if ($secret !== NULL) {

		// Get signature
		$hub_signature = $_SERVER['HTTP_X_HUB_SIGNATURE'];

		// Make sure signature is provided
		if (!isset($hub_signature)) {
			file_put_contents('deploy.log', date('m/d/Y h:i:s a') . ' Error: HTTP header "X-Hub-Signature" is missing.' . "\n", FILE_APPEND);
			die('HTTP header "X-Hub-Signature" is missing.');
		} elseif (!extension_loaded('hash')) {
			file_put_contents('deploy.log', date('m/d/Y h:i:s a') . ' Error: Missing "hash" extension to check the secret code validity.' . "\n", FILE_APPEND);
			die('Missing "hash" extension to check the secret code validity.');
		}

		// Split signature into algorithm and hash
		list($algo, $hash) = explode('=', $hub_signature, 2);

		// Get payload
		$payload = file_get_contents('php://input');

		// Calculate hash based on payload and the secret
		$payload_hash = hash_hmac($algo, $payload, $secret);

		// Check if hashes are equivalent
		if (!hash_equals($hash, $payload_hash)) {
		    // Kill the script or do something else here.
		    file_put_contents('deploy.log', date('m/d/Y h:i:s a') . ' Error: Bad Secret' . "\n", FILE_APPEND);
		    die('Bad secret');
		}

	};

	// Parse data from GitHub hook payload
	$data = json_decode($_POST['payload']);

	$commit_message;
	if (empty($data->commits)){
		// When merging and pushing to GitHub, the commits array will be empty.
		// In this case there is no way to know what branch was pushed to, so we will do an update.
		$commit_message .= 'true';
	} else {
		foreach ($data->commits as $commit) {
			$commit_message .= $commit->message;
		}
	}

	if (!empty($commit_message)) {

		// Do a git checkout, run Hugo, and copy files to public directory
		exec('cd ' . $repo_dir . ' && git fetch --all && git reset --hard origin/master');
		exec('cd ' . $repo_dir . ' && ' . $hugo_path);
		exec('cd ' . $repo_dir . ' && cp -r ' . $repo_dir . $rendered_dir . '/. ' . $web_root_dir);

		// Log the deployment
		file_put_contents('deploy.log', date('m/d/Y h:i:s a') . " Deployed branch: " .  $branch . " Commit: " . $commit_message . "\n", FILE_APPEND);

	}