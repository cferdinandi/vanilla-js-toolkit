---
title: "getPreviousSiblings.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get the previous sibling of an element that matches a test condition."
how: "https://gomakethings.com/finding-the-next-and-previous-sibling-elements-that-match-a-selector-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/dqVOKz"
weight: 10
noIndex: false
---

```js
/*!
 * Get previous sibling of an element that matches a test condition
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}     elem     The element
 * @param  {Function} callback The test condition
 * @return {Node}              The sibling
 */
function getPreviousSibling (elem, callback) {

	// Get the next sibling element
	let sibling = elem.previousElementSibling;

	// If there's no callback, return the first sibling
	if (!callback || typeof callback !== 'function') return sibling;

	// If the sibling matches our test condition, use it
	// If not, jump to the next sibling and continue the loop
	let index = 0;
	while (sibling) {
		if (callback(sibling, index, elem)) return sibling;
		index++;
		sibling = sibling.previousElementSibling;
	}

}
```