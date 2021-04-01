---
title: "getParams.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get all URL parameters from a query string."
how: "https://gomakethings.com/getting-all-query-string-values-from-a-url-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/PVwwpZ"
weight: 10
noIndex: false
---

```js
/*!
 * Get the URL parameters
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
function getParams (url = window.location) {
	let params = {};
	new URL(url).searchParams.forEach(function (val, key) {
		if (params[key] !== undefined) {
			if (!Array.isArray(params[key])) {
				params[key] = [params[key]];
			}
			params[key].push(val);
		} else {
			params[key] = val;
		}
	});
	return params;
}
```