---
title: "Array.pop()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Remove the last item from an array. "
weight: 120
---

Remove the last item from an array and returns it. The array is modified.

```javascript
let wizards = ['Gandalf', 'Radagast', 'Merlin'];
let last = wizards.pop();

// logs "Merlin"
console.log(last);

// logs ["Gandalf", "Radagast"]
console.log(wizards);
```