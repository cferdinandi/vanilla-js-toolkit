---
title: "Comparisons"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Compare two numbers."
polyfills: "Works back to at least IE6."
weight: 70
---

JavaScript includes a handful of comparison operators:

| Operator | Action                   |
|----------|--------------------------|
| `>`      | Greater than             |
| `<`      | Less than                |
| `===`    | Equals                   |
| `!==`    | Does not equal           |
| `>=`     | Greater than or equal to |
| `<=`     | Less than or equal to    |

```javascript
// Greater than
// logs true
console.log(2 > 1);

// Less than
// logs false
console.log(2 < 1);

// Equals
// logs true
console.log(2 === 2);

// Does not equal
// logs true
console.log(2 !== 1);

// Greater than or equal to
// logs true
console.log(2 >= 1);

// Less than or equal to
// logs true
console.log(2 <= 2);
```