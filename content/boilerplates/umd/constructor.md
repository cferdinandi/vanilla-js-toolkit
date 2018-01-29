---
title: "Universal Module Definition with a Constructor"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
weight: 30
---

Change `root.myPlugin` to whatever namespace you’d like to use for your plugin (ex. `root.Accordion`).

## Example

```js
var myPluginInstance = new myPlugin({
	mayo: true,
	bread: 'rye',
});
```

## The Boilerplate

```js
/*!
 * Universal Module Definition (UMD) with Constructor Boilerplate
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 */
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

	//
	// Shared Variables
	//

	var defaults = {};


	//
	// Shared Methods
	//

	/*!
	 * Merge two or more objects together.
	 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
	 * @param   {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
	 * @param   {Object}   objects  The objects to merge together
	 * @returns {Object}            Merged values of defaults and options
	 */
	var extend = function () {

		// Variables
		var extended = {};
		var deep = false;
		var i = 0;

		// Check if a deep merge
		if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
			deep = arguments[0];
			i++;
		}

		// Merge the object into the extended object
		var merge = function (obj) {
			for (var prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					// If property is an object, merge properties
					if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
						extended[prop] = extend(extended[prop], obj[prop]);
					} else {
						extended[prop] = obj[prop];
					}
				}
			}
		};

		// Loop through each object and conduct a merge
		for (; i < arguments.length; i++) {
			var obj = arguments[i];
			merge(obj);
		}

		return extended;

	};


	//
	// Constructor
	// Can be named anything you want
	//

	var Constructor = function (options) {

		//
		// Unique Variables
		//

		var publicAPIs = {};
		var settings;


		//
		// Unique Methods
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

			// Merge options into defaults
			settings = extend(defaults, options || {});

			// Code goes here...

		};

		// Initialize the plugin
		publicAPIs.init(options);

		// Return the public APIs
		return publicAPIs;

	};


	//
	// Return the constructor
	//

	return Constructor;

});
```