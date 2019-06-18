---
title: "Array.forEach()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
weight: 30
---

Pass a callback function into `forEach()`. The first argument is the current item in the loop. The second is the current index in the array. You can name these two variables anything you want.

```javascript
var sandwiches = [
	'tuna',
	'ham',
	'turkey',
	'pb&j'
];

sandwiches.forEach(function (sandwich, index) {
	console.log(index) // index
	console.log(sandwich) // value
});

// returns 0, tuna, 1, ham, 2, turkey, 3, pb&j
```