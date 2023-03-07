---
title: "Object.freeze()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Make an object or array immutable."
weight: 50
---

Make an object or array itself immutable. Pass the array or object in as an argument. Once run, you can't add, update, or delete items or properties from the array or object.

```javascript
let wizard = {
	name: 'Merlin',
	age: 'old AF'
};

// Freeze the wizard object
Object.freeze(wizard);

// Try to make updates
// This will not work
wizard.age = 42;
wizard.wand = true;
delete wizard.name;

// logs {name: "Merlin", age: "old AF"}
console.log(wizard);
```