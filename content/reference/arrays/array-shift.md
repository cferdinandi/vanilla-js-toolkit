---
title: "Array.shift()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Remove the first item from an array. "
weight: 110
---

Remove the first item from an array and returns it. The array is modified.

```javascript
let wizards = ['Gandalf', 'Radagast', 'Merlin'];
let first = wizards.shift();

// logs "Gandalf"
console.log(first);

// logs ["Radagast", "Merlin"]
console.log(wizards);
```