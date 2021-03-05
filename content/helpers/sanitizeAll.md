---
title: "sanitizeAll.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Sanitize and encode all HTML strings in an array or object to prevent XSS attacks."
how: ""
demo: ""
polyfills: "This removes all markup from a string. If you want to allow users to include markup, use a tool like [DOMPurify](https://github.com/cure53/DOMPurify) instead."
weight: 10
noIndex: false
---

```js
/**
 * Sanitize and encode all HTML strings in an array or object
 * @param  {*}      Obj  A string, array, object, number. etc.
 * @return {*}           The encoded object
 */
var sanitizeAll = function (obj) {

	// Get the object type
	var type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

	// If an object, loop through and recursively encode
	if (type === 'object') {
		var sanitized = {};
		for (var key in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				sanitized[key] = sanitizeAll(obj[key]);
			}
		}
		return sanitized;
	}

	// If an array, create a new array and recursively encode
	if (type === 'array') {
		return obj.map(function (item) {
			return sanitizeAll(item);
		});
	}

	// If the data is a string, encode it
	// https://portswigger.net/web-security/cross-site-scripting/preventing
	if (type === 'string') {
		return obj.replace(/[^\w. ]/gi, function(c){
			return '&#' + c.charCodeAt(0) + ';';
		});
	}

	// Otherwise, return object as is
	return obj;

};
```