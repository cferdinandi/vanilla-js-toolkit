---
title: "parseFloat()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 20
---

Convert a string into a point number (a number with decimal points).

```javascript
// returns 3.14
parseFloat('3.14');

// also returns 3.14
parseFloat('3.14someRandomStuff');

// returns 3
parseFloat('3');
```