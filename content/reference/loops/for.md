---
title: "for"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 10
---

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