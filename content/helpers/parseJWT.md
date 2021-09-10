---
title: "parseJWT.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Decode the payload from a JSON Web Token (JWT)."
how: ""
demo: "https://codepen.io/cferdinandi/pen/powPbwv"
weight: 10
noIndex: false
---

```js
/**
 * Decode a JWT payload
 * https://stackoverflow.com/a/38552302
 * @param  {String} token The JWT
 * @return {Object}       The decoded payload
 */
function parseJWT (token) {
	let base64Url = token.split('.')[1];
	let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
	return JSON.parse(jsonPayload);
}
```