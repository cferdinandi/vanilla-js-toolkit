---
title: "sessionStorage"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Store data locally for the duration of the current browser session."
polyfills: "Works back to IE8.<br><br>For more complex `sessionStorage` management, I wrote [a small helper library](https://github.com/cferdinandi/bin)."
weight: 30
---

Use the local storage API to store data locally that the browser can access later. Data is cleared when the browser session ends, and must be a string.

```javascript
// Store data
var someTempData = 'The data that I want to store temporarily.';
sessionStorage.setItem('myTempDataKey', someTempData);

// Get data
var tempData = sessionStorage.getItem('myTempDataKey');

// Remove data
sessionStorage.removeItem('myTempDatakey');
```