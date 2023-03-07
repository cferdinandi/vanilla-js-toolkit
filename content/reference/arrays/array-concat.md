---
title: "Array.concat()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Merge two or more arrays together."
weight: 80
---

Merge two or more arrays together. Call `Array.concat()` on the first array, and pass each array to merge with it in as arguments.

It returns a new array. The original arrays are not modified.

```javascript
let sandwiches1 = ['turkey', 'tuna', 'blt'];
let sandwiches2 = ['chicken', 'pb&j'];
let allSandwiches = sandwiches1.concat(sandwiches2);

// logs ["turkey", "tuna", "blt"]
console.log(sandwiches1);

// logs ["chicken", "pb&j"]
console.log(sandwiches2);

// logs ["turkey", "tuna", "blt", "chicken", "pb&j"]
console.log(allSandwiches);
```