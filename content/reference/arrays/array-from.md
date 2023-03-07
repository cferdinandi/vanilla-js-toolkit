---
title: "Array.from()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Create a new array from an existing array or array-like object."
weight: 130
---

Create a new array from an existing one, or transform an array-like object (like a NodeList) into an array. Pass the array (or array-like object) to copy in as an argument.

```javascript
let sandwiches = ['turkey', 'tuna', 'ham', 'pb&j'];
let sandwichesCopy = Array.from(sandwiches);
```