---
title: "Revealing Constructor Pattern"
date: 2018-01-24T12:16:26-05:00
description: "Create multiple instances of script with public and private methods."
example: "a plugin."
draft: false
weight: 40
noIndex: false
---

Change `MyPlugin` to whatever namespace you’d like to use for your plugin. Constructors start with a capital letter.

## Examples

```js
// Instantiate the plugin
var plugin = new MyPlugin();

// Use public methods
plugin.doSomething();
plugin.init();
```

## The Boilerplate

```js
/*!
 * Revealing Constructor Pattern Boilerplate
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 */
var MyPlugin = (function () {

	'use strict';

	/**
	 * Create the Constructor object
	 */
	var Constructor = function () {

		//
		// Variables
		//

		var publicAPIs = {};


		//
		// Methods
		//

		/**
		 * A private method
		 */
		var somePrivateMethod = function () {
			// Code goes here...
		};

		/**
		 * A public method
		 */
		publicAPIs.doSomething = function () {
			somePrivateMethod();
			// Code goes here...
		};

		/**
		 * Another public method
		 */
		publicAPIs.init = function (options) {
			// Code goes here...
		};


		//
		// Return the Public APIs
		//

		return publicAPIs;

	};


	//
	// Return the Constructor
	//

	return Constructor;

})();
```