---
title: "Array.forEach() & NodeList.forEach()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Loop through arrays and NodeLists."
weight: 40
---

The `Array.forEach()` and `NodeList.forEach()` methods provide a simpler way to iterate over arrays and NodeLists while still having access to the index.

You pass a callback function into the `forEach()` method. The callback itself accepts three arguments: the current item in the loop, the index of the current item in the loop, and the array itself. All three are optional, and you can name them anything you want.

```javascript
let sandwiches = ['turkey', 'tuna', 'ham', 'pb&j'];

// logs 0, "tuna", 1, "ham", 2, "turkey", 3, "pb&j"
sandwiches.forEach(function (sandwich, index) {
	console.log(index); // index
	console.log(sandwich); // value
});
```