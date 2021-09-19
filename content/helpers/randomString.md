---
title: "randomString.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Generate, hash, and encode cryptographically random strings."
how: ""
demo: "https://codepen.io/cferdinandi/pen/MWoVJMQ"
weight: 10
noIndex: false
---

```js
/**
 * Generate a secure random string using the browser crypto functions
 * @return {String} A random string
 */
function generateRandomString () {
	var array = new Uint32Array(28);
	window.crypto.getRandomValues(array);
	return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
}

/**
 * Calculate the SHA256 hash of the input text
 * @param  {String}  plain The plaintext string
 * @return {Promise}       Resolves as a hash
 */
function sha256 (plain) {
	const encoder = new TextEncoder();
	const data = encoder.encode(plain);
	return window.crypto.subtle.digest('SHA-256', data);
}

/**
 * Base64-urlencode a string
 * @param  {String} str The unencoded string
 * @return {String}     The encoded string
 */
function base64urlencode (str) {
	// Convert the ArrayBuffer to string using Uint8 array to conver to what btoa accepts.
	// btoa accepts chars only within ascii 0-255 and base64 encodes them.
	// Then convert the base64 encoded to base64url encoded
	// (replace + with -, replace / with _, trim trailing =)
	return btoa(String.fromCharCode.apply(null, new Uint8Array(str)))
		.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
```