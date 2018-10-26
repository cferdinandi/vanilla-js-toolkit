---
title: "debounce.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Debounce functions for better performance."
weight: 10
noIndex: false
---

Debounce functions for better performance. {{<learn-how url="https://gomakethings.com/debouncing-your-javascript-events/">}}

```js
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
			fn.apply(this, args);
		});

	}

};
```