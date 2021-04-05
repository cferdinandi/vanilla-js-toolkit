---
title: "randomNumber.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get a random integer with a minimum and maximum value."
how: "https://gomakethings.com/generating-random-numbers-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/BaaoEXq"
weight: 10
noIndex: false
---

```js
/*!
 * Get a random integer with a minimum and maximum value
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Integer} min  The minimum value
 * @param  {Integer} max  The maximum value
 * @return {Integer}      A random number
 */
function randomNumber (min = 0, max = 1000) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
```
