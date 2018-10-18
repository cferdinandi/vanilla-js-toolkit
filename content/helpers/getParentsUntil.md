---
title: "getParentsUntil.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get all of an element's parent elements up the DOM tree until a matching parent is found."
weight: 10
noIndex: false
---

Get all of an element's parent elements up the DOM tree until a matching parent is found. {{<learn-how hash="get-parent-elements-until-a-match-is-found">}}

```js
/*!
 * Get all of an element's parent elements up the DOM tree until a matching parent is found
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {String} parent   The selector for the parent to stop at
 * @param  {String} filter   The selector to filter against [optional]
 * @return {Array}           The parent elements
 */
var getParentsUntil = function (elem, parent, filter) {

	// matches() polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}

	// Setup parents array
	var parents = [];

	// Get matching parent elements
	while (elem && elem !== document) {

		// If there's a parent and the element matches, break
		if (parent) {
			if (elem.matches(parent)) break;
		}

		// If there's a filter and the element matches, push it to the array
		if (filter) {
			if (elem.matches(filter)) {
				parents.push(elem);
			}
			continue;
		}

		// Otherwise, just add it to the array
		parents.push(elem);

		elem = elem.parentNode;

	}

	return parents;

};
```