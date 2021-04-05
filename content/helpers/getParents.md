---
title: "getParents.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get all of an element's parent elements up the DOM tree."
how: "https://gomakethings.com/how-to-get-all-parent-elements-with-vanilla-javascript/"
demo: "https://codepen.io/cferdinandi/pen/qgEEXw"
weight: 10
noIndex: false
---

```js
/*!
 * Get all of an element's parent elements up the DOM tree
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}     elem     The element
 * @param  {Function} callback The test condition
 * @return {Array}             The parent elements
 */
function getParents (elem, callback) {

	// Setup variables
	let parents = [];
	let parent = elem.parentNode;
	let index = 0;

	// Make sure callback is valid
	if (typeof callback !== 'function') {
		callback = null;
	}

	// Get matching parent elements
	while (parent && parent !== document) {

		// If using a selector, add matching parents to array
		// Otherwise, add all parents
		if (callback) {
			if (callback(parent, index, elem)) {
				parents.push(parent);
			}
		} else {
			parents.push(parent);
		}

		// Jump to the next parent node
		index++;
		parent = parent.parentNode;

	}

	return parents;

}
```