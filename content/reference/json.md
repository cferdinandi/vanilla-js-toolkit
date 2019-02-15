---
title: "JSON"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
anchors: true
weight: 150
---

## `JSON.stringify()`

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

*Works back to IE8.*



## `JSON.parse()`

Converts stringified JSON back into an object or array.

```javascript
// Get data from local storage
var savedLunch = JSON.parse(localStorage.getItem('lunchOrder'));
var savedDrinks = JSON.parse(localStorage.getItem('drinkOptions'));
```

*Works back to IE8.*