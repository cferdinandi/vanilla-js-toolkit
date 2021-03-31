---
title: "decodeHTML.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Decode HTML entities from an encoded string."
how: "https://gomakethings.com/decoding-html-entities-with-vanilla-javascript/"
demo: "https://codepen.io/cferdinandi/pen/rPNEjj"
weight: 10
noIndex: false
---

```js
/**
 * Decode HTML entities from an encoded string
 * https://stackoverflow.com/a/7394787/1293256
 * @param  {String} html The encoded HTML string
 * @return {String}      A decoded HTML string
 */
function decodeHTML (html) {
	let txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
}
```