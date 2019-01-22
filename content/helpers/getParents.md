---
title: "getParents.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get all of an element's parent elements up the DOM tree."
how: "https://gomakethings.com/how-to-get-all-parent-elements-with-vanilla-javascript/"
demo: "https://codepen.io/cferdinandi/pen/qgEEXw"
polyfills: "[Requires the `matches()` polyfill.](https://vanillajstoolkit.com/polyfills/matches/)"
weight: 10
noIndex: false
---

```js
/*!
 * Get all of an element's parent elements up the DOM tree
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {String} selector Selector to match against [optional]
 * @return {Array}           The parent elements
 */
var getParents = function (elem, selector) {

	// Setup parents array
	var parents = [];

	// Get matching parent elements
	while (elem && elem !== document) {

		// If using a selector, add matching parents to array
		// Otherwise, add all parents
		if (selector) {
			if (elem.matches(selector)) {
				parents.push(elem);
			}
		} else {
			parents.push(elem);
		}

		// Jump to the next parent node
		elem = elem.parentNode;

	}

	return parents;

};
```