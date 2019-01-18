---
title: "Constructor Pattern"
date: 2018-01-24T12:16:26-05:00
description: "Create multiple instances of script that share methods but contain unique information."
example: "a DOM manipulation library like jQuery."
draft: false
weight: 30
noIndex: false
---

Change `MyPlugin` to whatever namespace you’d like to use for your plugin. Constructors start with a capital letter.

## Examples

```js
// Create a new instance of the constructor
var headings = new MyPlugin('h2');

// Run a method
headings.addClass('heading-big');
```

## The Boilerplate

```js
/*!
 * Constructor Pattern Boilerplate
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 */
var MyPlugin = (function () {

	'use strict';

	//
	// Methods
	//

	/**
	 * Create the Constructor object
	 */
	var Constructor = function (selector) {
		this.nodes = document.querySelectorAll(selector);
	};

	/**
	 * Loop through each element
	 */
	Constructor.prototype.forEach = function (callback) {
		for (var i = 0; i < this.nodes.length; i++) {
			callback(this.nodes[i], i);
		}
	};

	/**
	 * Add a class to each element
	 */
	Constructor.prototype.addClass = function (className) {
		this.forEach(function (node) {
			node.classList.add(className);
		});
	};


	//
	// Return the Constructor
	//

	return Constructor;

})();
```