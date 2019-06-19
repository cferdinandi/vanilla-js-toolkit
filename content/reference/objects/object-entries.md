---
title: "Object.entries()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get an array of key/value pairs from an object."
polyfills: "[Requires a polyfill for IE.](https://vanillajstoolkit.com/polyfills/objectentries/)"
weight: 20
---

Return an array of key/value pairs, also represented as arrays. Pass in the object as an argument.

```javascript
var lunch = {
	sandwich: 'turkey',
	chips: 'cape cod',
	drink: 'soda'
};

// logs [['sandwich', 'turkey'], ['chips', 'cape code'], ['drink', 'soda']]
var entries = Object.entries(lunch);
console.log(entries);
```