---
title: "getPreviousUntil.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get all previous siblings of an element until a selector is found."
weight: 10
noIndex: false
---

Get all previous siblings of an element until a selector is found. {{<learn-how url="https://gomakethings.com/finding-the-next-and-previous-sibling-elements-that-match-a-selector-with-vanilla-js/">}}

```js
/*!
 * Get previous siblings of an element until a selector is found
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {String} selector The selector to match against
 * @return {Array}           The siblings
 */
var getPreviousUntil = function (elem, selector) {

	// Setup siblings array and get previous sibling
	var siblings = [];
	var prev = elem.previousElementSibling;

	// Loop through all siblings
	while (prev) {

		// If the matching item is found, quit
		if (selector && prev.matches(selector)) break;

		// Otherwise, push to array
		siblings.push(prev);

		// Get the previous sibling
		prev = prev.previousElementSibling

	}

	return siblings;

};
```