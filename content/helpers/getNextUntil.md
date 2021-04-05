---
title: "getNextUntil.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get all next siblings of an element until a test condition is met."
how: "https://gomakethings.com/how-to-get-all-siblings-of-an-element-until-a-selector-is-found-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/LqEENq"
weight: 10
noIndex: false
---

```js
/*!
 * Get next siblings of an element until a test condition is met
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}     elem     The element
 * @param  {Function} callback The test condition
 * @return {Array}             The siblings
 */
function getNextUntil (elem, callback) {

	// Setup siblings array and get next sibling
	let siblings = [];
	let next = elem.nextElementSibling;
	let index = 0;

	// Loop through all siblings
	while (next) {

		// If the matching item is found, quit
		if (callback && typeof callback === 'function' && callback(next, index, elem)) break;

		// Otherwise, push to array
		siblings.push(next);

		// Get the next sibling
		index++;
		next = next.nextElementSibling;

	}

	return siblings;

}
```