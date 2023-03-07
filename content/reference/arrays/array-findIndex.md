---
title: "Array.findIndex()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Find the index of an item in a multidimensional array."
weight: 160
---

Find the index of an item in a _multidimensional array_ (an array whose items include other arrays or objects).

Pass a callback function into the `Array.findIndex()` method. The callback itself accepts three arguments: the current item in the loop, the index of the current item in the loop, and the array itself. All three are optional, and you can name them anything you want.

Inside the callback, you can check some conditions about the current item. The `Array.findIndex()` method will return the index of the first item that you return `true` for.

```javascript
let sandwiches = [
	{
		name: 'turkey',
		smelly: false
	},
	{
		name: 'tuna',
		smelly: true
	},
	{
		name: 'pb&j',
		smelly: false
	}
];

// Find the index of the tuna sandwich
// returns 1
sandwiches.findIndex(function (sandwich) {
	if (sandwich.name === 'tuna') {
		return true;
	}
});
```