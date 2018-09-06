---
title: "getSiblings.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get all siblings of an element."
weight: 10
noIndex: false
---

Get all siblings of an element. {{<learn-how url="https://gomakethings.com/how-to-get-all-of-an-elements-siblings-with-vanilla-js/">}}

```js
/*!
 * Get all siblings of an element
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}  elem The element
 * @return {Array}      The siblings
 */
var getSiblings = function (elem) {

	// Setup siblings array and get the first sibling
	var siblings = [];
	var sibling = elem.parentNode.firstChild;

	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling;
	}

	return siblings;

};
```