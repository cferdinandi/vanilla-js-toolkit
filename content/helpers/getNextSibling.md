---
title: "getNextSiblings.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get the next sibling of an element that matches a selector."
weight: 10
noIndex: false
---

Get the next sibling of an element that matches a selector. {{<learn-how url="https://gomakethings.com/finding-the-next-and-previous-sibling-elements-that-match-a-selector-with-vanilla-js/">}}

```js
/*!
 * Get next sibling of an element that matches selector
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {String} selector The selector to match against
 * @return {Node}            The sibling
 */
var getNextSibling = function (elem, selector) {

	// Get the next sibling element
	var sibling = elem.nextElementSibling;

	// If there's no selector, return the first sibling
	if (!selector) return sibling;

	// If the sibling matches our selector, use it
	// If not, jump to the next sibling and continue the loop
	while (sibling) {
		if (sibling.matches(selector)) return sibling;
		sibling = sibling.nextElementSibling
	}

};
```