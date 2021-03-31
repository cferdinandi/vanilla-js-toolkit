---
title: "buildQuery.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Build a query string from an object of data."
demo: "https://codepen.io/cferdinandi/pen/rPNgEe"
weight: 10
noIndex: false
---

```js
/*!
 * Build a query string from an object of data
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object} data The data to turn into a query string
 * @return {String}      The query string
 */
function buildQuery (data) {
	return new URLSearchParams(data).toString();
}
```