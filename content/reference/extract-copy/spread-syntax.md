---
title: "Spread Syntax"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Expand array or object properties into their own values."
weight: 30
---

Take an array or object (or other iterable) and expand its items into their own individual values.

```javascript
let sandwiches = ['tuna', 'turkey', 'pb&j'];

// logs ["tuna", "turkey", "pb&j"]
console.log(sandwiches);

// logs tuna turkey pb&j
console.log(...sandwiches);
```

You can use it to pass array values into a function.

```js
let numbers = [4, 2];

// Instead of this...
add(numbers[0], numbers[1]);

// You can do this...
add(...numbers);
```

You can also use to copy or merge arrays or objects.

```js
let moreSandwiches = [...sandwiches1, ...sandwiches2];
let allWizards = {...radagast, ...gandalf};
```
