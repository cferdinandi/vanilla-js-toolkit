---
title: "isInViewport.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Determine if an element is in the viewport."
weight: 10
noIndex: false
---

Determine if an element is in the viewport. {{<learn-how hash="check-if-an-element-is-in-the-viewport-or-not">}}

```js
/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};
```