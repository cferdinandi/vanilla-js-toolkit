---
title: "Settings and Options"
date: 2018-01-24T12:16:26-05:00
description: "Let users pass in options to customize the script. Works with any of the patterns."
draft: false
weight: 60
noIndex: false
---

The example below uses a simple function, but this approach can be used with revealing module patterns, constructors, and UMD.

*__Note:__ the `Object.assign()` method [requires a polyfill](/polyfills/objectassign/).*

## Examples

```js
sayHi({
	message: 'Hi, universe!'
});

sayHi({
	selector: '#message'
});
```

## The Boilerplate

```js
/*!
 * Settings and Options Boilerplate
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 */
var sayHi = function (options) {

	'use strict';

	// Default settings
	var defaults = {
		message: 'Hello, world!',
		selector: '#app'
	};

	// Merge user options into defaults
	var settings = Object.assign({}, defaults, options);

	// Do something...
	// Here's an example

	// Get an element and show the message
	var app = document.querySelector(settings.selector);
	if (app) {
		app.textContent = settings.message;
	}

};
```