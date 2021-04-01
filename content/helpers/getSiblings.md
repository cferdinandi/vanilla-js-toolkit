---
title: "getSiblings.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get all siblings of an element."
how: "https://gomakethings.com/an-es6-way-to-get-all-sibling-elements-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/rZvMJL"
weight: 10
noIndex: false
---

```js
/*!
 * Get all siblings of an element
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}  elem The element
 * @return {Array}      The siblings
 */
function getSiblings (elem) {
	return Array.from(elem.parentNode.children).filter(function (sibling) {
		return sibling !== elem;
	});
}
```