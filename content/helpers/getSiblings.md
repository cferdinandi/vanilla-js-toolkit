---
title: "getSiblings.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get all siblings of an element."
weight: 10
noIndex: false
---

Get all siblings of an element. {{<learn-how hash="get-sibling-elements">}}

```js
/*!
 * Get all siblings of an element
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}  elem The element
 * @return {Array}      The siblings
 */
var getSiblings = function (elem) {
	var siblings = [];
	var sibling = elem.parentNode.firstChild;
	for (; sibling; sibling = sibling.nextSibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
	}
	return siblings;
};
```