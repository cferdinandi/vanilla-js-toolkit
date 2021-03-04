---
title: "sanitizeHTML.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Sanitize and encode all HTML in a user-submitted string to prevent XSS attacks."
how: "https://gomakethings.com/how-to-sanitize-third-party-content-with-vanilla-js-to-prevent-cross-site-scripting-xss-attacks/"
demo: "https://codepen.io/cferdinandi/pen/dyXmVpY"
polyfills: "This removes all markup from a string. If you want to allow users to include markup, use a tool like [DOMPurify](https://github.com/cure53/DOMPurify) instead."
weight: 10
noIndex: false
---

```js
/**
 * Sanitize and encode all HTML in a user-submitted string
 * https://portswigger.net/web-security/cross-site-scripting/preventing
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
function sanitizeHTML (str) {
	return str.replace(/javascript:/gi, '').replace(/[^\w-_. ]/gi, function (c) {
		return `&#${c.charCodeAt(0)};`;
	});
}
```