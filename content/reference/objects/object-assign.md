---
title: "Object.assign()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Perform a shallow merge of two or more objects."
polyfills: "[Requires a polyfill for IE.](https://vanillajstoolkit.com/polyfills/objectassign/)"
weight: 30
---

Perform a shallow merge of two or more objects into the first. Pass in each object to merge as an argument.

*__Note:__ in a shallow merge, nested objects are overwritten completely rather than having their values merged together.*

```javascript
var object1 = {
	apple: 0,
	banana: {
		weight: 52,
		price: 100
	},
	cherry: 97
};

var object2 = {
	banana: {
		price: 200
	},
	durian: 100
};

var object3 = {
	apple: 'yum',
	pie: 3.214,
	applePie: true
};

// In this example, "banana" will only contain {price: 200}
// In a deep merge, it would contain {price: 200, weight: 52}
var merged = Object.assign(object1, object2, object3);
```

All objects are merged into the first. To create a new object, pass in an empty object as the first argument.

```javascript
var mergedNewObj = Object.assign({}, object1, object2, object3);
```