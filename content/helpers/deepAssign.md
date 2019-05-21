---
title: "deepAssign.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Deep merge two or more objects into the first."
how: "https://gomakethings.com/merging-objects-with-vanilla-javascript/"
demo: "https://codepen.io/cferdinandi/pen/gJXRbw"
weight: 10
noIndex: false
---

```js
/*!
 * Deep merge two or more objects into the first.
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param   {Object} objects  The objects to merge together
 * @returns {Object}          Merged values of defaults and options
 */
var deepAssign = function () {

	// Make sure there are objects to merge
	var len = arguments.length;
	if (len < 1) return;
	if (len < 2) return arguments[0];

	// Merge all objects into first
	for (var i = 1; i < len; i++) {
		for (var key in arguments[i]) {
			// If it's an object, recursively merge
			// Otherwise, push to key
			if (Object.prototype.toString.call(arguments[i][key]) === '[object Object]') {
				arguments[0][key] = deepAssign(arguments[0][key] || {}, arguments[i][key]);
			} else {
				arguments[0][key] = arguments[i][key];
			}
		}
	}

	return arguments[0];

};
```