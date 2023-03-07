---
title: "JSON.parse()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Convert stringified JSON back into an object or array."
weight: 20
---

Convert stringified JSON back into an object or array.

```javascript
// Get data from local storage
let savedLunch = JSON.parse(localStorage.getItem('lunchOrder'));
let savedDrinks = JSON.parse(localStorage.getItem('drinkOptions'));
```