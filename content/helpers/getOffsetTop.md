---
title: "getOffsetTop.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get an element's distance from the top of the Document."
how: "https://gomakethings.com/how-to-get-an-elements-distance-from-the-top-of-the-page-with-vanilla-javascript/"
demo: "https://codepen.io/cferdinandi/pen/zexxKL"
weight: 10
noIndex: false
---

```js
/*!
 * Get an element's distance from the top of the Document.
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node} elem The element
 * @return {Number}    Distance from the top in pixels
 */
var getOffsetTop = function (elem) {
	var location = 0;
	if (elem.offsetParent) {
		while (elem) {
			location += elem.offsetTop;
			elem = elem.offsetParent;
		}
	}
	return location >= 0 ? location : 0;
};
```