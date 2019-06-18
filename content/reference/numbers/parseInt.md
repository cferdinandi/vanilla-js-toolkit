---
title: "parseInt()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 10
---

Convert a string into an integer (a whole number). The second argument, `10`, is called the `radix`. This is the base number used in mathematical systems. For our use, it should always be `10`.

```javascript
// returns 42
parseInt('42', 10);

// also returns 42
parseInt('42px', 10);
```