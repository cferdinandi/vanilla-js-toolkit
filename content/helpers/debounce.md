---
title: "debounce.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Debounce functions for better performance."
weight: 10
noIndex: false
---

Debounce functions for better performance. {{<learn-how url="https://davidwalsh.name/javascript-debounce-function">}}

```js
/**
 * Debounce functions for better performance
 * https://davidwalsh.name/javascript-debounce-function
 * @param  {Function} func The function to debounce
 * @param  {Integer}  wait Amount of delay to wait for
 */
var debounce = function (func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
```