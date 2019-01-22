---
title: "nextUntil.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get all following siblings of each element up to but not including the element matched by the selector."
how: "https://gomakethings.com/how-to-get-all-sibling-elements-until-a-match-is-found-with-vanilla-javascript/"
demo: "https://codepen.io/cferdinandi/pen/mvyVmy"
polyfills: "[Requires the `matches()` polyfill.](https://vanillajstoolkit.com/polyfills/matches/)"
weight: 10
noIndex: false
---

```js
/*!
 * Get all following siblings of each element up to but not including the element matched by the selector
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {String} selector The selector to stop at
 * @param  {String} filter   The selector to match siblings against [optional]
 * @return {Array}           The siblings
 */
var nextUntil = function (elem, selector, filter) {

	// Setup siblings array
	var siblings = [];

	// Get the next sibling element
	elem = elem.nextElementSibling;

	// As long as a sibling exists
	while (elem) {

		// If we've reached our match, bail
		if (elem.matches(selector)) break;

		// If filtering by a selector, check if the sibling matches
		if (filter && !elem.matches(filter)) {
			elem = elem.nextElementSibling;
			continue;
		}

		// Otherwise, push it to the siblings array
		siblings.push(elem);

		// Get the next sibling element
		elem = elem.nextElementSibling;

	}

	return siblings;

};
```