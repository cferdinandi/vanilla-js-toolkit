---
title: "createColor.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Create a random color value."
how: "https://gomakethings.com/a-better-way-to-generate-a-random-color-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/yWdZmr"
weight: 10
noIndex: false
---

```js
/*!
 * Create a random color value.
 * (c) 2009 Paul Irish, CCO License - http://creativecommons.org/publicdomain/zero/1.0/
 * https://www.paulirish.com/2009/random-hex-color-code-snippets/
 * @return {String} A random six-digit color hexcode
 */
var createColor = function () {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
```