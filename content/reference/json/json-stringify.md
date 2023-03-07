---
title: "JSON.stringify()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Convert object or array data into a string."
weight: 20
---

Convert object or array data into a string.

```js
// Save an object
let lunch = {
	sandwich: 'turkey',
	chips: 'Cape Cod',
	drink: 'Pepsi'
};
localStorage.setItem('lunchOrder', JSON.stringify(lunch));

// Save an array
let drinks = ['Pepsi', 'water', 'lemonade'];
localStorage.setItem('drinkOptions', JSON.stringify(drinks));
```