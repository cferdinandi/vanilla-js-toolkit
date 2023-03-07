---
title: "Array.indexOf()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get the index of the first matching item in an array."
weight: 140
---

Get the index of an item in an array. It returns the index of the item if it's in the array, and `-1` if it's not.

```javascript
let sandwiches = ['turkey', 'tuna', 'ham', 'pb&j'];

// returns 0
sandwiches.indexOf('turkey');

// returns 3
sandwiches.indexOf('pb&j');

// returns -1
sandwiches.indexOf('grilled cheese');
```