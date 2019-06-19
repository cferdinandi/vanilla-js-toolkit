---
title: "delete"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Remove an item from an object."
polyfills: "Works back to at least IE6."
weight: 40
---

Remove an item from an object. Use the `delete` operator on the key to remove.

```javascript
var lunch = {
	sandwich: 'turkey',
	chips: 'cape cod',
	drink: 'soda'
};

// Remove the chips key from the lunch object
delete lunch.chips;

// logs {sandwich: 'turkey', drink: 'soda'}
console.log(lunch);
```