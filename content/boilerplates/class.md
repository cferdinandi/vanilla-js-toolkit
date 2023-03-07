---
title: "Class Pattern"
date: 2018-01-24T12:16:26-05:00
description: "An alternative approach to implementing the constructor pattern, with a nicer syntax and some additional features."
example: "a piggy bank library."
draft: false
weight: 40
noIndex: false
---

Change `MyLibrary` to whatever namespace you’d like to use for your library. The constructor object is lowercase, and functions are automatically attached to the instance `prototype`.

## Examples

```js
// Create new instances of the constructor
let dugg = new MyLibrary();
let kevin = new MyLibrary(4);

// Run methods
dugg.add(2);
kevin.subtract(1);
let total = dug.total;
```

## The Boilerplate

```js
class MyLibrary {

	/**
	 * Create the constructor object
	 * @param {Number} start The starting amount
	 */

	constructor (start = 0) {
		this.total = start;
	}

	/**
	 * Add money to the total
	 */
	add (num = 1) {
		this.total = this.total + num;
	}

	/**
	 * Remove money from the total
	 */
	subtract (num = 1) {
		this.total = this.total - num;
	}
}
```