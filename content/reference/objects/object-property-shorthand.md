---
title: "Object Property Shorthand"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "A shorthand for defining object properties."
weight: 60
---

If you want to define a property in an object, and that key name already exists as a variable within the object's scope, you don't have to explicitly assign a value. You can use just the key name, and that variable's value is used automatically.

```javascript
// Some details
let name = 'Merlin';
let job = 'wizard';
let age = 'old AF';

// The object
let wizard = {
	name: name, // The old way
	job,        // ES6 shorthand
	age         // ES6 shorthand
};
```