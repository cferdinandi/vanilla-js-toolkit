// Serialize the form data into a query string
// Forked and modified from https://stackoverflow.com/a/30153391/1293256
var serialize = function (form) {

	// Setup our serialized data
	var serialized = '';

	// Loop through each field in the form
	for (i = 0; i < form.elements.length; i++) {

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

// Display the form status
var displayMailChimpStatus = function (data) {

	// Get the status message content area
	var mcStatus = document.querySelector('.mc-status');
	if (!mcStatus) return;

	// Update our status message
	mcStatus.innerHTML = data.msg;

	// Bring our status message into focus
	mcStatus.setAttribute('tabindex', '-1');
	mcStatus.focus();

	// If error, add error class
	if (data.result === 'error') {
		mcStatus.classList.remove('success-message');
		mcStatus.classList.add('error-message');
		return;
	}

	// Otherwise, redirect to success page
	window.location.href = 'https://gomakethings.com/newsletter-success/';

};

// Submit the form
var submitMailChimpForm = function (form) {

	// Get the Submit URL
	var url = form.getAttribute('action');
	url = url.replace('/post?u=', '/post-json?u=');
	url += serialize(form) + '&c=displayMailChimpStatus';

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