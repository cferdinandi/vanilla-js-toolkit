---
title: "getParam.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get the value of a query string from a URL."
how: "https://gomakethings.com/how-to-get-the-value-of-a-querystring-with-native-javascript/"
demo: "https://codepen.io/cferdinandi/pen/NoPPBv"
weight: 10
noIndex: false
---

```js
/*!
 * Get the value of a query string from a URL
 * (c) 2023 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} param The parameter to get the value of
 * @param  {String} url   The URL to get the value from [optional]
 * @return {String}       The value
 */
function getParam (param, url = window.location) {
	let params = new URL(url).searchParams;
	let val = params.getAll(param);
	if (val.length > 1) return val;
	return val[0];
}
```