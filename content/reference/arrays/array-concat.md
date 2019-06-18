---
title: "Array.concat()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 20
---

Merge two or more arrays together. Call `concat()` on the first array, and pass each array to merge with it in as arguments. It returns a new array.

```javascript
var sandwiches1 = ['turkey', 'tuna', 'blt'];
var sandwiches2 = ['chicken', 'pb&j'];
var allSandwiches = sandwiches1.concat(sandwiches2);

// logs ['turkey', 'tuna', 'blt', 'chicken', 'pb&j']
console.log(allSandwiches);
```