---
title: "Object.keys()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get an array of keys from an object."
weight: 10
---

Return an array of keys from an object. Pass in the object as an argument.

```javascript
let lunch = {
	sandwich: 'turkey',
	chips: 'cape cod',
	drink: 'soda'
};

// logs ["sandwich", "chips", "drink"]
let keys = Object.keys(lunch);
console.log(keys);
```