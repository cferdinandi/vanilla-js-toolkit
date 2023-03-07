---
title: "Object.entries()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get an array of key/value pairs from an object."
weight: 20
---

Return an array of key/value pairs from an object, also represented as arrays. Pass in the object as an argument.

```javascript
let lunch = {
	sandwich: 'turkey',
	chips: 'cape cod',
	drink: 'soda'
};

// logs [["sandwich", "turkey"], ["chips", "cape cod"], ["drink", "soda"]]
let entries = Object.entries(lunch);
console.log(entries);
```