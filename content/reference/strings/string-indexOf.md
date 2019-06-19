---
title: "String.indexOf()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Determine if a string contains a substring."
polyfills: "Works back to at least IE6."
weight: 90
---

Determine if a string contains a substring. It returns the index of where the substring starts in the string, or `-1` if the substring isn't found. It's case-sensitive.

```javascript
var str = 'I love Cape Cod potato chips.';

// Returns 7
str.indexOf('Cape Cod');

// Returns -1
str.indexOf('cape cod');
```