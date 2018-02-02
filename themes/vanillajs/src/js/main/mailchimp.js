var mailchimp = function (callback) {

	'use strict';


	//
	// Variables
	//

	// Fields
	var form = document.querySelector('#mailchimp-form');
	if (!form) return;
	var email = form.querySelector('#mailchimp-email');
	if (!email) return;
	var status = form.querySelector('#mc-status');

	// Messages
	var messages = {
		empty: 'Please provide an email address.',
		notEmail: 'Please use a valid email address.'
	};


	//
	// Methods
	//

	/**
	 * Serialize the form data into a query string
	 * https://stackoverflow.com/a/30153391/1293256
	 * @param  {Node}   form The form to serialize
	 * @return {String}      The serialized form data
	 */
	var serialize = function (form) {

		// Setup our serialized data
		var serialized = '';

		// Loop through each field in the form
		for (var i = 0; i < form.elements.length; i++) {

			var field = form.elements[i];

			// Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
			if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

			// Convert field data to a query string
			if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
				serialized += '&' + encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value);
			}
		}

		return serialized;

	};

	var clearStatus = function () {

		// Bail if there's no status container
		if (!status) return;

		// Wipe classes and HTML from the status
		status.innerHTML = '';
		status.className = '';

		// Wipe classes and aria labels from the email field
		email.className = '';
		email.removeAttribute('aria-describedby');

	};

	var showStatus = function (msg, success) {

		// Bail if there's no status container
		if (!status) return;

		// Update the status message
		status.innerHTML = msg;

		// Set status class
		if (success) {
			status.className = 'success-message';
			status.setAttribute('tabindex', '-1');
			status.focus();
		} else {
			status.className = 'error-message';
			email.className = 'error';
			email.setAttribute('aria-describedby', 'mc-status');
			email.focus();
		}

	};

	var disableButton = function () {
		var btn = form.querySelector('[data-processing]');
		if (!btn) return;
		btn.setAttribute('data-original', btn.innerHTML);
		btn.setAttribute('disabled', 'disabled');
		btn.innerHTML = btn.getAttribute('data-processing');
	};

	var enableButton = function () {
		var btn = form.querySelector('[data-processing]');
		if (!btn) return;
		btn.removeAttribute('disabled');
		btn.innerHTML = btn.getAttribute('data-original');
	};

	// Callback to run when data from form submit comes back
	window.mailchimpCallback = function (data) {

		// Reactive the submit button
		enableButton();

		// Show status message
		var success = data.result === 'error' ? false : true;
		showStatus(data.msg, success);

		// If there's a callback, run it
		if (callback && typeof callback === 'function') {
			callback(data);
		}

	};

	// Submit the form
	var submitForm = function () {

		// Disable the submit button
		disableButton();

		// Get the Submit URL
		var url = form.getAttribute('action');
		url = url.replace('/post?u=', '/post-json?u=');
		url += serialize(form) + '&c=mailchimpCallback';

		// Create script with url and callback (if specified)
		var ref = window.document.getElementsByTagName('script')[ 0 ];
		var script = window.document.createElement('script');
		script.src = url;

		// Create a global variable for the status container
		window.mcStatus = form.querySelector('.mc-status');

		// Insert script tag into the DOM (append to <head>)
		ref.parentNode.insertBefore(script, ref);

		// After the script is loaded (and executed), remove it
		script.onload = function () {
			this.remove();
		};

	};

	var isEmail = function () {
		return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/.test(email.value);
	};

	var validate = function () {

		// If no email is provided
		if (email.value.length < 1) {
			showStatus(messages.empty);
			return false;
		}

		// If email is not valid
		if (!isEmail()) {
			showStatus(messages.notEmail);
			return false;
		}

		return true;

	};

	var submitHandler = function (event) {

		// Stop form from submitting
		event.preventDefault();

		// Clear the status
		clearStatus();

		// Validate email
		var valid = validate();

		if (valid) {
			submitForm();
		}

	};


	//
	// Event Listeners & Inits
	//

	form.setAttribute('novalidate', 'novalidate');
	form.addEventListener('submit', submitHandler, false);

};