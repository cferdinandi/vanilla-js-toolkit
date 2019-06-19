---
title: "JSON.parse()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Convert stringified JSON back into an object or array."
polyfills: "Works back to IE8."
weight: 20
---

Converts stringified JSON back into an object or array.

```javascript
// Get data from local storage
var savedLunch = JSON.parse(localStorage.getItem('lunchOrder'));
var savedDrinks = JSON.parse(localStorage.getItem('drinkOptions'));
```