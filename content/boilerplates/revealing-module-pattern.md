---
title: "Revealing Module Pattern"
date: 2018-01-24T12:16:26-05:00
description: "Allows you to keep most of your variables and functions out of the global scope, but make some of them publicly available."
example: "a helper library like lodash."
draft: false
weight: 20
noIndex: false
---

Change `MyLibrary` to whatever namespace you’d like to use for your library.

## Examples

```js
MyLibrary.sayHi();
MyLibrary.sayBye();
```

## The Boilerplate

```js
/**
 * Revealing Module Pattern Boilerplate
 */
let MyLibrary = (function () {

	// This variable is scoped internally
	// It can't be accessed externally
	let name = 'Wall-E';

	// This is returned at the end and can be run externally
	function sayHi () {
		console.log(`Hi ${name}`);
	}

	// This can also be run externally
	function sayBye () {
		console.log(`Bye ${name}`);
	}

	// Return and functions and variables that should be accessible externally
	return {sayHi, sayBye};

})();
```