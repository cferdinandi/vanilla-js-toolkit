---
title: "localStorage"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Store data locally in the browser for later use."
weight: 20
---

Use the local storage API to store data locally that the browser can access later. Data is stored indefinitely, and must be a string.

```javascript
// Store data
var someData = 'The data that I want to store for later.';
localStorage.setItem('myDataKey', someData);

// Get data
var data = localStorage.getItem('myDataKey');

// Remove data
localStorage.removeItem('myDatakey');
```