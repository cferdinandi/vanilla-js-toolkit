---
title: "encodeHTML.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Encode the HTML in a user-submitted string to reduce the risk of XSS attacks."
how: "https://gomakethings.com/how-to-sanitize-third-party-content-with-vanilla-js-to-prevent-cross-site-scripting-xss-attacks/"
demo: "https://codepen.io/cferdinandi/pen/rNmKXpx"
polyfills: "This converts all HTML in a string to plain text. If you want to allow users to include markup, use [cleanHTML()](/helpers/cleanhtml) instead."
weight: 10
noIndex: false
---

```js
/**
 * Encode the HTML in a user-submitted string
 * https://portswigger.net/web-security/cross-site-scripting/preventing
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
function encodeHTML (str) {
	return str.replace(/data:/gi, '').replace(/javascript:/gi, '').replace(/[^\w-_. ]/gi, function (c) {
		return `&#${c.charCodeAt(0)};`;
	});
}
```