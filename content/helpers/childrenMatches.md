---
title: "childrenMatches.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get all direct descendant elements that match a test."
how: "https://gomakethings.com/how-to-get-all-direct-descendants-that-match-a-test-condition-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/qJGLyy"
weight: 10
noIndex: false
---

```js
/*!
 * Get all direct descendant elements that match a test condition
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element to get direct descendants for
 * @param  {Function} callback The test condition
 * @return {Array}           The matching direct descendants
 */
function childrenMatches (elem, callback) {
	return Array.from(elem.children).filter(callback);
}
```