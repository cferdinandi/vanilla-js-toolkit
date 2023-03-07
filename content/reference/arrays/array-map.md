---
title: "Array.map()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Transform the items in an array and create a new one."
weight: 10
---

Loop through each item in an array, transform it, and return a new array. Pass in a callback function that accepts three arguments: the current item in the loop, its index, and the array itself. All three are optional.

Whatever you `return` inside the callback function becomes the new value at that index in the new array.

```javascript
/**
 * Double each number in an array
 */

let numbers = [1, 4, 9];
let doubles = numbers.map(function(num) {
	return num * 2;
});

// logs [2, 8, 18]
console.log(doubles);


/**
 * Get an array of just names
 */
let data = [
	{
		name: 'Kyle',
		occupation: 'Fashion Designer'
	},
	{
		name: 'Liza',
		occupation: 'Web Developer'
	},
	{
		name: 'Emily',
		occupation: 'Web Designer'
	},
	{
		name: 'Melissa',
		occupation: 'Fashion Designer'
	},
	{
		name: 'Tom',
		occupation: 'Web Developer'
	}
];

let names = data.map(function (item) {
	return item.name;
});

// logs ["Kyle", "Liza", "Emily", "Melissa", "Tom"]
console.log(names);
```