---
title: "childrenMatches.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get all direct descendant elements that match a selector."
how: "https://gomakethings.com/getting-direct-descendant-elements-by-selector-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/qJGLyy"
weight: 10
noIndex: false
---

```js
/*!
 * Get all direct descendant elements that match a selector
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element to get direct descendants for
 * @param  {String} selector The selector to match against
 * @return {Array}           The matching direct descendants
 */
function childrenMatches (elem, selector) {
	return Array.from(elem.children).filter(function (child) {
		return child.matches(selector);
	});
}
```