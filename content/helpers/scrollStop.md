---
title: "scrollStop.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Run a callback function after scrolling has stopped."
how: "https://gomakethings.com/detecting-when-a-visitor-has-stopped-scrolling-with-vanilla-javascript/"
demo: "https://codepen.io/cferdinandi/pen/BGpPoo"
weight: 10
noIndex: false
---

```js
/*!
 * Run a callback function after scrolling has stopped
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The callback function to run after scrolling
 * @param  {Integer}  refresh  How long to wait between scroll events [optional]
 */
function scrollStop (callback, refresh = 66) {

	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return;

	// Setup scrolling variable
	let isScrolling;

	// Listen for scroll events
	window.addEventListener('scroll', function (event) {

		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(callback, refresh);

	}, false);

}
```