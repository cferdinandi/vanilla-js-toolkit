---
title: "Array.push()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 10
---

Add items to an array. Pass the new items in as arguments.

```javascript
var sandwiches = ['turkey', 'tuna', 'blt'];
sandwiches.push('chicken', 'pb&j');

// logs ['turkey', 'tuna', 'blt', 'chicken', 'pb&j']
console.log(sandwiches);
```