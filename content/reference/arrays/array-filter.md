---
title: "Array.filter()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Create a new array containing a subset of items from an existing ones."
weight: 70
---

Create a new array with only elements that pass a test you include as a callback function. The callback accepts three arguments: the current item in the loop's value, its index, and the array itself.

```javascript
// Create a new array with only numbers greater than 10
var newArray = [1, 2, 7, 42, 99, 101].filter(function (item) {
	return item > 10;
});

// logs [42, 99, 101]
console.log(newArray);
```