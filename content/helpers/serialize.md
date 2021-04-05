---
title: "serialize.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Serialize all form data into a query string. Fields must have a `name` property."
how: "https://gomakethings.com/how-to-serialize-form-data-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/dyYVKLK"
weight: 10
noIndex: false
---

```js
/*!
 * Serialize all form data into an object
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {FormData} data The FormData object to serialize
 * @return {String}        The serialized form data
 */
function serialize (data) {
	let obj = {};
	for (let [key, value] of data) {
		if (obj[key] !== undefined) {
			if (!Array.isArray(obj[key])) {
				obj[key] = [obj[key]];
			}
			obj[key].push(value);
		} else {
			obj[key] = value;
		}
	}
	return obj;
}
```