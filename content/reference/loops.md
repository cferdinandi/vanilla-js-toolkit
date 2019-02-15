---
title: "Loops"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
anchors: true
weight: 20
---

## `for` loops

Loop through array and array-like (ex. `NodeList`) lists items.

```javascript
var sandwiches = [
	'tuna',
	'ham',
	'turkey',
	'pb&j'
];

for (var i = 0; i < sandwiches.length; i++) {
	console.log(i) // index
	console.log(sandwiches[i]) // value
}

// returns 0, tuna, 1, ham, 2, turkey, 3, pb&j
```

*Works back to at least IE6.*



## `for...in`

Similar to a `for` loop, but used to loop through objects.

```javascript
var lunch = {
	sandwich: 'ham',
	snack: 'chips',
	drink: 'soda',
	desert: 'cookie',
	guests: 3,
	alcohol: false,
};

for (var key in lunch) {
	if (lunch.hasOwnProperty(key)) {
		console.log(key); // key
		console.log(lunch[key]); // value
	}
}

// returns sandwich, ham, snack, chips, drink, soda, desert, cookie, guests, 3, alcohol, false
```

*Works back to at least IE6.*



## `Array.forEach()`

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