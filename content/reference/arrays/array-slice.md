---
title: "Array.slice()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Copy a segment of an array into a new array."
weight: 90
---

Copy a segment of an array into a new array.

The first argument is the array index to start at, and the second is the index to end on. Both are optional. If you omit the start index, it will start at the beginning. If you omit the end index, it will go to the end.

The original array is not modified.

```javascript
let sandwiches = ['turkey', 'tuna', 'chicken salad', 'italian', 'blt', 'grilled cheese'];

// ["chicken salad", "italian", "blt", "grilled cheese"]
let fewerSandwiches = sandwiches.slice(2);

// ["chicken salad", "italian", "blt"]
let fewerSandwiches2 = sandwiches.slice(2, 4);
```

To create a brand new copy of an array in its entirety, you can use `slice()` with no arguments.

```javascript
let sandwichesCopy = sandwiches.slice();
```