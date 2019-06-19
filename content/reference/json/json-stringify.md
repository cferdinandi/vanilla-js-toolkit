---
title: "JSON.stringify()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Convert objects and arrays into strings."
polyfills: "Works back to IE8."
weight: 20
---

Converts objects and arrays into strings.

```js
// A lunch order
var lunch = {
	sandwich: 'turkey',
	chips: 'Cape Cod',
	drink: 'Pepsi'
};

// Save data to local storage
localStorage.setItem('lunchOrder', JSON.stringify(lunch));

// Drink options
var drinks = ['Pepsi', 'water', 'lemonade'];

// Save data to local storage
localStorage.setItem('drinkOptions', JSON.stringify(drinks));
```