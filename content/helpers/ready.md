---
title: "ready.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Run event after the DOM is ready."
weight: 1
noIndex: false
---

Run event after the DOM is ready. {{<learn-how hash="dom-ready">}}

```js
/*!
 * Run event after the DOM is ready
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn Callback function
 */
var ready = function (fn) {

	// Sanity check
	if (typeof fn !== 'function') return;

	// If document is already loaded, run method
	if (document.readyState === 'interactive' || document.readyState === 'complete') {
		return fn();
	}

	// Otherwise, wait until document is loaded
	document.addEventListener('DOMContentLoaded', fn, false);

};
```