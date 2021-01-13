/*! vanillajs v1.5.0 | (c) 2021 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/vanilla-js-toolkit */
(function () {
	'use strict';

	/**
	 * Element.matches() polyfill (simple version)
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
	 */
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}

	/**
	 * Add links to headings
	 * @param {String} selector The headings to get in the DOM (uses querySelectorAll)
	 * @param {String} content  The content to add to the anchor link [default: #]
	 * @param {String} styles   The class(es) to add to the link [default: anchor-link]
	 */
	var addHeadingLinks = function (selector, content, styles) {

		// Make sure a selector was provided
		if (!selector) return;

		// Variables
		var headings = Array.from(document.querySelectorAll(selector));
		content = content || '#';
		styles = styles || 'anchor-link';

		headings.forEach(function (heading) {
			if (!heading.id) return;
			heading.innerHTML += ` <a class="${styles}" href="#${heading.id}">${content}</a>`;
		});

	};

	/**
	 *
	 * @param {Function} callback
	 */
	var mailchimp = function (callback) {

		//
		// Variables
		//

		// Fields
		var form = document.querySelector('#mailchimp-form');
		if (!form) return;
		var email = form.querySelector('#mailchimp-email');
		if (!email) return;
		var status = form.querySelector('#mc-status');
		var btn = form.querySelector('[data-processing]');

		// Messages
		var messages = {
			empty: 'Please provide an email address.',
			notEmail: 'Please use a valid email address.',
			success: 'Success! Thanks for inviting me to your inbox.',
			failed: 'Something went wrong. Please try again.'
		};

		// Endpoint
		var endpoint = 'https://gomakethings.com/checkout/wp-json/gmt-mailchimp/v1/subscribe';


		//
		// Methods
		//

		/**
		 * Serialize form data into a query string
		 * @param  {Form}   form The form
		 * @return {String}      The query string
		 */
		var serializeForm = function (form) {
			var arr = [];
			var formData = new FormData(form);
			for (var key of formData.keys()) {
				arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(formData.get(key)));
			}
			return arr.join('&');
		};

		/**
		 * Show a status message
		 * @param  {String}  msg     The message to show
		 * @param  {Boolean} success If true, the status was successful
		 */
		var showStatus = function (msg, success) {

			// Bail if there's no status container
			if (!status) return;

			// Update the status message
			status.textContent = msg;

			// Set status classes
			status.className = success ? 'success-message' : 'error-message';
			email.className = success ? '' : 'error';

		};

		/**
		 * Send data to the API
		 * @param  {String} params The form parameters
		 */
		var sendData = function (params) {
			fetch(endpoint, {
				method: 'POST',
				body: params,
				headers: {
					'Content-type': 'application/x-www-form-urlencoded'
				}
			}).then(function (response) {
				return response.json();
			}).then(function (data) {

				// Show status
				var success = data.code >= 200 && data.code < 300 ? true : false;
				showStatus(success ? messages.success : data.message, success);

				// If there's a callback, run it
				if (callback && typeof callback === 'function') {
					callback(data);
				}

			}).catch(function (error) {
				showStatus(messages.failed);
			}).finally(function () {
				form.removeAttribute('data-submitting');
			});
		};

		/**
		 * Submit the form to the API
		 */
		var submitForm = function () {

			// Add submitting state
			form.setAttribute('data-submitting', true);

			// Send the data to the MailChimp API
			sendData(serializeForm(form));

		};

		/**
		 * Validate the email address
		 * @return {Boolean} If true, email is valid
		 */
		var isEmail = function () {
			return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/.test(email.value);
		};

		/**
		 * Validate the form fields
		 * @return {Boolean} If true, form is valid
		 */
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

		/**
		 * Handle submit events
		 * @param  {Event} event The event object
		 */
		var submitHandler = function (event) {

			// Stop form from submitting
			event.preventDefault();

			// Don't run again if form currrent submitting
			if (form.hasAttribute('data-submitting')) return;

			// Show submitting status
			showStatus(btn.getAttribute('data-processing'), true);

			// Validate email
			var valid = validate();

			if (valid) {
				submitForm();
			}

		};


		//
		// Event Listeners & Inits
		//

		form.addEventListener('submit', submitHandler, false);

	};

	/**
	 * Generate a table of contents from headings
	 * @param  {String} navSelector      Selector for the nav container
	 * @param  {String} headingsSelector Selector for the headings
	 * @param  {String} heading          The table of contents heading
	 * @param  {String} styles           Any classes to add to the list nav
	 * @param  {String} type             The list type (ul/ol)
	 */
	var tableOfContents = function (navSelector, headingsSelector, heading, styles, type) {

		// Make sure a selector was provided
		if (!navSelector || !headingsSelector) return;

		// Get the nav
		var nav = document.querySelector(navSelector);
		if (!nav) return;

		// Variables
		var headings = document.querySelectorAll(headingsSelector);
		type = type || 'ul';
		var navList = '';

		// Loop through each heading
		for (var i = 0; i < headings.length; i++) {
			if (!headings[i].id) continue;
			navList += '<li><a href="#' + headings[i].id + '">' + headings[i].textContent + '</a></li>';
		}

		// Make sure a navList exists
		if (navList.length < 1) return;

		nav.innerHTML =
			(heading ? heading : '') +
			'<' + type + (styles ? ' class="' + styles + '"' : '') + '>' +
				navList +
			'</' + type + '>';

	};

	// Mailchimp form
	if (document.querySelector('#mailchimp-form')) {
		mailchimp(function (data) {
			if (data.code === 200) {
				window.location.href = 'https://gomakethings.com/newsletter-success';
			}
		});
	}

	// Add table of contents
	if (document.querySelector('#table-of-contents')) {
		tableOfContents('#table-of-contents', 'h2', '<h2 class="h5">On this page</h2>', null, 'ul');
	}

	// Anchor links on posts
	if (document.body.matches('.js-anchors')) {
		addHeadingLinks('h2, h3, h4, h5, h6', '#', 'link-no-underline');
	}

}());
