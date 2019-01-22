---
title: "getQueryString.js"
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
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} field The field to get the value of
 * @param  {String} url   The URL to get the value from [optional]
 * @return {String}       The value
 */
var getQueryString = function (field, url) {
	var href = url ? url : window.location.href;
	var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
	var string = reg.exec(href);
	return string ? string[1] : null;
};
```