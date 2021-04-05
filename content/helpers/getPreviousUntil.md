---
title: "getPreviousUntil.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get all previous siblings of an element until a test condition is met."
how: "https://gomakethings.com/how-to-get-all-siblings-of-an-element-until-a-selector-is-found-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/vbEEjO"
weight: 10
noIndex: false
---

```js
/*!
 * Get previous siblings of an element until a selector is found
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {Function} callback The test condition
 * @return {Array}           The siblings
 */
function getPreviousUntil (elem, callback) {

	// Setup siblings array and get previous sibling
	let siblings = [];
	let prev = elem.previousElementSibling;
	let index = 0;

	// Loop through all siblings
	while (prev) {

		// If the matching item is found, quit
		if (callback && typeof callback === 'function' && callback(prev, index, elem)) break;

		// Otherwise, push to array
		siblings.push(prev);

		// Get the previous sibling
		index++;
		prev = prev.previousElementSibling;

	}

	return siblings;

}
```