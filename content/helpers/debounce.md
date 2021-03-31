---
title: "debounce.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Debounce functions for better performance."
how: "https://gomakethings.com/debouncing-your-javascript-events/"
demo: "https://codepen.io/cferdinandi/pen/VEgzVa"
weight: 10
noIndex: false
---

```js
/**
 * Debounce functions for better performance
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn The function to debounce
 */
function debounce (fn) {

	// Setup a timer
	let timeout;

	// Return a function to run debounced
	return function () {

		// Setup the arguments
		let context = this;
		let args = arguments;

		// If there's a timer, cancel it
		if (timeout) {
			window.cancelAnimationFrame(timeout);
		}

		// Setup the new requestAnimationFrame()
		timeout = window.requestAnimationFrame(function () {
			fn.apply(context, args);
		});

	};

}
```