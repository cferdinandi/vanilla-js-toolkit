---
title: "String.padStart()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Add characters to the beginning of a string if it's less than a certain length."
polyfills: "[Requires a polyfill for IE.](/polyfills/stringpadstart/)"
weight: 10
---

Add characters to the beginning of a string if it's less than a certain length. Accepts two arguments: the length the string should be, and what characters to add if it's not that length. The characters to use is optional, and defaults to a space (` `).

```javascript
// Add a leading zero for hours below 10
var hour3 = '3';
var hour12 = '12';

// returns "03"
hour3.padStart(2, '0');

// returns "12"
hour12.padStart(2, '0');
```