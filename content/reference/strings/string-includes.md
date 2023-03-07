---
title: "String.includes()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Check if a string contains a substring."
weight: 110
---

Check if a string contains a substring. Returns a boolean: `true` if the string has the substring, and `false` if it doesn't. It's case-sensitive.

```javascript
let str = 'I love Cape Cod potato chips.';

// returns true
str.includes('Cape Cod');

// returns false
str.includes('cape cod');

// returns false
str.includes('chocolate');
```