---
title: "scrollDistance.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Run a callback after the user scrolls, calculating the distance and direction scrolled."
how: "https://gomakethings.com/detecting-scroll-distances-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/BEOVOa"
weight: 10
noIndex: false
---

```js
/*!
 * Run a callback after the user scrolls, calculating the distance and direction scrolled
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The callback function to run
 * @param  {Integer}  refresh  How long to wait between scroll events [optional]
 */
var scrollDistance = function (callback, refresh) {

	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return;

	// Variables
	var isScrolling, start, end, distance;

	// Listen for scroll events
	window.addEventListener('scroll', function (event) {

		// Set starting position
		if (!start) {
			start = window.pageYOffset;
		}

		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {

			// Calculate distance
			end = window.pageYOffset;
			distance = end - start;

			// Run the callback
			callback(distance, start, end);

			// Reset calculations
			start = null;
			end = null;
			distance = null;

		}, refresh || 66);

	}, false);

};
```