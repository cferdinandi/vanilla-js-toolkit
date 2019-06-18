---
title: "Array.from()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "[Requires a polyfill for IE.](https://vanillajstoolkit.com/polyfills/arrayfrom/)"
weight: 50
---

Create a new array from an existing one, or transform an array-like object (like a NodeList) into an array. Pass the array (or array-like object) to copy in as an argument.

```javascript
var sandwiches = ['turkey', 'tuna', 'ham', 'pb&j'];
var sandwichesCopy = Array.from(sandwiches);
```