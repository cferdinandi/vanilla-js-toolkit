---
title: "sanitizeHTML.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Sanitize and encode all HTML in a user-submitted string to prevent XSS attacks."
how: "https://gomakethings.com/preventing-cross-site-scripting-attacks-when-using-innerhtml-in-vanilla-javascript/"
demo: "https://codepen.io/cferdinandi/pen/zexrbb"
polyfills: "This removes all markup from a string. If you want to allow users to include markup, use a tool like [DOMPurify](https://github.com/cure53/DOMPurify) instead."
weight: 10
noIndex: false
---

```js
/*!
 * Sanitize and encode all HTML in a user-submitted string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
var sanitizeHTML = function (str) {
	var temp = document.createElement('div');
	temp.textContent = str;
	return temp.innerHTML;
};
```