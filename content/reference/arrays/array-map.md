---
title: "Array.map()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
weight: 60
---

Iterate through each item in an array, transform it, and return a new array. The callback accepts three arguments: the current item in the loop's value, its index, and the array itself.

```javascript
/**
 * Double each number in an array
 */

var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
	return num * 2;
});

// logs [2, 8, 18]
console.log(doubles);


/**
 * Get an array of just names
 */
var data = [
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

var names = data.map(function (item) {
	return item.name;
});

// logs ["Kyle", "Liza", "Emily", "Melissa", "Tom"]
console.log(names);
```