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
 * @param  {String} selector The selector to filter against [optionals]
 * @return {Array}           The parent elements
 */
var getParentsUntil = function (elem, parent, selector) {

	// Element.matches() polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype.matchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector ||
			Element.prototype.oMatchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			function(s) {
				var matches = (this.document || this.ownerDocument).querySelectorAll(s),
					i = matches.length;
				while (--i >= 0 && matches.item(i) !== this) {}
				return i > -1;
			};
	}

	// Setup parents array
	var parents = [];

	// Get matching parent elements
	for (; elem && elem !== document; elem = elem.parentNode) {

		if (parent) {
			if (elem.matches(parent)) break;
		}

		if (selector) {
			if (elem.matches(selector)) {
				parents.push(elem);
			}
			break;
		}

		parents.push(elem);

	}

	return parents;

};
```