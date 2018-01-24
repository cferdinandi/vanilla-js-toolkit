---
title: "getParents.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get all of an element's parent elements up the DOM tree."
weight: 10
noIndex: false
---

Get all of an element's parent elements up the DOM tree. {{<learn-how hash="get-all-parent-elements">}}

```js
/*!
 * Get all of an element's parent elements up the DOM tree
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {String} selector Selector to match against [optional]
 * @return {Array}           The parent elements
 */
var getParents = function (elem, selector) {

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

		// Add matching parents to array
		if (selector) {
			if (elem.matches(selector)) {
				parents.push(elem);
			}
		} else {
			parents.push(elem);
		}

	}

	return parents;

};
```