---
title: "Array.reduce()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
weight: 80
---

Take the content of an array and return a single value. That value can be anything: a string, number, object, or even another array.

The `Array.reduce()` method accepts two arguments: a callback method to run against each item in the array, and a starting value.

The callback also accepts two arguments: the `accumulator`, which is the current combined value, and the `current` item in the loop. Whatever you return is used as the accumulator for the next item in the loop. On the very first loop, that starting value is used instead.

```javascript
/**
 * Add all of the numbers in an array
 */

var total = [1, 2, 3].reduce(function (sum, current) {
	return sum + current;
}, 0);

// logs 6
console.log(total);


/**
 * Create a new array with only the names of wizards in Huffepuff
 */

var wizards = [
	{
		name: 'Harry Potter',
		house: 'Gryfindor'
	},
	{
		name: 'Cedric Diggory',
		house: 'Hufflepuff'
	},
	{
		name: 'Tonks',
		house: 'Hufflepuff'
	},
	{
		name: 'Ronald Weasley',
		house: 'Gryfindor'
	},
	{
		name: 'Hermione Granger',
		house: 'Gryfindor'
	}
];

// This combines what you would otherwise do with map() and filter() into one step
var hufflepuff = wizards.reduce(function (newArr, wizard) {
	if (wizard.house === 'Hufflepuff') {
		newArr.push(wizard.name);
	}
	return newArr;
}, []);

// logs ["Cedric Diggory", "Tonks"]
console.log(hufflepuff);
```