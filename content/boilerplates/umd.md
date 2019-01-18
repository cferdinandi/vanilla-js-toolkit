---
title: "UMD"
date: 2018-01-24T12:16:26-05:00
description: "Provides support for JavaScript module bundlers and loaders, as well as global namespacing (like with the other patterns)."
draft: false
weight: 50
noIndex: false
---

Change `myPlugin` to whatever namespace you’d like to use for your plugin. Can be used with any of the patterns.

```js
/*!
 * UMD Boilerplate
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 */
//
(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], function () {
			return factory(root);
		});
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.myPlugin = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

	'use strict';

	// Code goes here...

});
```