---
title: "scrollStop.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Run functions after scrolling has stopped."
weight: 10
noIndex: false
---

Run functions after scrolling has stopped. {{<learn-how url="https://gomakethings.com/detecting-when-a-visitor-has-stopped-scrolling-with-vanilla-javascript/">}}

```js
/*! scrollStop.js | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/scrollStop */
/**
 * Run functions after scrolling has stopped
 * @param  {Function} callback The function to run after scrolling
 */
var scrollStop = function ( callback ) {

	// Make sure a valid callback was provided
	if ( !callback || Object.prototype.toString.call( callback ) !== '[object Function]' ) return;

	// Setup scrolling variable
	var isScrolling;

	// Listen for scroll events
	window.addEventListener('scroll', function ( event ) {

		// Clear our timeout throughout the scroll
		window.clearTimeout( isScrolling );

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {

			// Run the callback
			callback();

		}, 66);

	}, false);

};
```