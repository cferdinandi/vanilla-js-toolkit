---
title: "Array Destructuring"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Extract variables from array properties."
weight: 10
---

A way to extract variables from array properties. 

Define _an array of variables_, and the destructuring syntax will pull the values at the matching indexes out and assign them to the variables.

```javascript
let lunch = ['turkey sandwich', 'soda', 'chips', 'cookie'];

let [entree, drink, side, desert] = lunch;

// logs "turkey sandwich"
console.log(entree);

// logs "chips"
console.log(side);
```