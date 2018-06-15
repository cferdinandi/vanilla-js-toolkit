---
title: "isOutOfViewport.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Check if any part of an element is out of the viewport."
weight: 10
noIndex: false
---

Check if any part of an element is out of the viewport. {{<learn-how href="https://gomakethings.com/how-to-check-if-any-part-of-an-element-is-out-of-the-viewport-with-vanilla-js">}}

```js
/*!
 * Check if an element is out of the viewport
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}  elem The element to check
 * @return {Object}     A set of booleans for each side of the element
 */
var isOutOfViewport = function (elem) {

	// Get element's bounding
	var bounding = elem.getBoundingClientRect();

	// Check if it's out of the viewport on each side
	var out = {};
	out.top = bounding.top < 0;
	out.left = bounding.left < 0;
	out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
	out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
	out.any = out.top || out.left || out.bottom || out.right;
	out.all = out.top && out.left && out.bottom && out.right;

	return out;

};
```