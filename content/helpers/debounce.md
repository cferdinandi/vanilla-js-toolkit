---
title: "debounce.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Debounce functions for better performance."
how: "https://gomakethings.com/debouncing-your-javascript-events/"
demo: "https://codepen.io/cferdinandi/pen/VEgzVa"
polyfills: "Works in all modern browsers, and back to IE10. [Push support back to IE6 with the `requestAnimationFrame()` polyfill.](https://vanillajstoolkit.com/polyfills/requestanimationframe/)"
weight: 10
noIndex: false
---

```js
/**
 * Debounce functions for better performance
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn The function to debounce
 */
var debounce = function (fn) {

	// Setup a timer
	var timeout;

	// Return a function to run debounced
	return function () {

		// Setup the arguments
		var context = this;
		var args = arguments;

		// If there's a timer, cancel it
		if (timeout) {
			window.cancelAnimationFrame(timeout);
		}

		// Setup the new requestAnimationFrame()
		timeout = window.requestAnimationFrame(function () {
			fn.apply(context, args);
		});

	}

};
```