---
title: "String.indexOf()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Find the index of a substring inside a string."
weight: 100
---

Find a substring inside a string. It returns the index of where the substring starts in the string, or `-1` if the substring isn't found. It's case-sensitive.

```javascript
let str = 'I love Cape Cod potato chips.';

// Returns 7
str.indexOf('Cape Cod');

// Returns 7
str.indexOf('Cape C');

// Returns -1
str.indexOf('cape cod');
```
