---
title: "Objects"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
anchors: true
weight: 80
---

## `Object.assign()`

Perform a shallow merge of two or more objects. Pass in each object to merge as an argument.

*__Note:__ in a shallow merge, nested objects are overwritten completely rather than having their values merged together.*

```javascript
// Example objects
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
var mergedObjs = Object.assign(object1, object2, object3);
```

*Works in all modern browsers, including Edge, but not IE. [Use with a polyfill.](/polyfills/objectassign/)*



## Deep Merges

To support deep merges, [I wrote an `extend()` helper method](/helpers/extend/).

```javascript
// Example objects
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

// Create a new object by combining two or more objects
var mergedShallow = extend(object1, object2, object3);
var mergedDeep = extend(true, object1, object2, object3);
var clonedObj = extend(object1);
```

*Works back to at least IE6.*



## Remove an item from an object

Use the `delete` operator to remove an item from an object.

```javascript
var lunch = {
	sandwich: 'turkey',
	chips: 'cape cod',
	drink: 'soda'
};

// Remove the chips key from the lunch object
delete lunch.chips;

// Logs {sandwich: 'turkey', drink: 'soda'}
console.log(lunch);
```

*Works back to at least IE6.*



## `Object.keys()`

Return an array of keys from an object. Pass in the object as an argument.

```javascript
var lunch = {
	sandwich: 'turkey',
	chips: 'cape cod',
	drink: 'soda'
};

// Logs ['sandwich', 'chips', 'drink']
console.log(Object.keys(lunch));

// Logs "sandwich", "turkey", "chips", "cape cod", "drink", "soda"
Object.keys(lunch).forEach(function (key) {
	console.log(key); // The key
	console.log(lunch[key]); // The value
});
```