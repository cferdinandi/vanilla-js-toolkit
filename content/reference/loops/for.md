---
title: "for"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Loop through arrays and array-like objects."
weight: 10
---

Loop through arrays, NodeLists, and other array-like objects.

```javascript
let sandwiches = ['turkey', 'tuna', 'ham', 'pb&j'];

// logs 0, "tuna", 1, "ham", 2, "turkey", 3, "pb&j"
for (let i = 0; i < sandwiches.length; i++) {
	console.log(i); // index
	console.log(sandwiches[i]); // value
}
```