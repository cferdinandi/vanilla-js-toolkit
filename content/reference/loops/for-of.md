---
title: "for...of"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Loop over iterable objects."
weight: 20
---

Loop over _iterable objects_. That includes strings, arrays, and other array-like objects such as NodeLists, HTMLCollections, and HTMLFormControlsCollection, but _not_ plain objects (`{}`).

```javascript
let sandwiches = ['turkey', 'tuna', 'ham', 'pb&j'];

// logs "tuna", "ham", "turkey", "pb&j"
for (let sandwich of sandwiches) {
	console.log(sandwich);
}
```