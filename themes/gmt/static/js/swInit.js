/*! vanillajs v1.5.0 | (c) 2021 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/vanilla-js-toolkit */
(function () {
	'use strict';

	// Initialize the service worker
	if (navigator && navigator.serviceWorker) {
		navigator.serviceWorker.register('/sw.js');
	}

	// Cleanup old cache on page load
	if (navigator.serviceWorker.controller) {
		window.addEventListener('load', function () {
			navigator.serviceWorker.controller.postMessage('cleanUp');
		});
	}

}());
