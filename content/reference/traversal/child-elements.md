---
title: "Child elements by selector"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Search for elements with a specific selector inside a parent element."
weight: 30
---

The `querySelector()` and `querySelectorAll()` APIs aren't limited to just running on the `document`. They can be run on any element to search only for elements inside of it.

```javascript
var elem = document.querySelector('#some-elem');

// Find the first element inside `#some-elem` that has a `[data-snack]` attribute
var snack = elem.querySelector('[data-snack]');

// Get all divs inside `#some-elem`
var divs = elem.querySelectorAll('div');
```