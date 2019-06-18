---
title: "String.slice()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 70
---

Get a portion of a string starting (and optionally ending) at a particular character. The first argument is where to start. Use `0` to include the first character. The second argument is where to end (and is optional).

If either argument is a negative integer, it will start at the end of the string and work backwards.

```javascript
var text = 'Cape Cod potato chips';

// returns "Cod potato chips"
text.slice(5);

// returns "Code"
text.slice(5, 8);

// returns "Cape Cod potato"
text.slice(0, -6);

// returns "chips"
text.slice(-5);
```