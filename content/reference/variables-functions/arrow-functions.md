---
title: "Arrow Functions"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "An alternate way to define functions."
weight: 40
---

A basic arrow function isn't all that different from a traditional function. The word `function` gets dropped, and a fat arrow (`=>`) is added between the parentheses and brackets (`()` and `{}`, respectively).

```javascript
// A traditional function
function add (num1, num2) {
	return num1 + num2;
}

// The arrow function version
let add = (num1, num2) => {
	return num1 + num2;
};
```

*__Note:__ Named arrow functions have to be written as a function expression. There's no way to write one as a function declaration.*

If your function is only returning a value, as is the case with our `add()` function, you can simplify the function even further by dropping the curly brackets (`{}`) and `return` operator.

```javascript
// returns the value of `num1 + num2`
let add = (num1, num2) => num1 + num2;
```

This only works if the only thing you're doing is returning a value. If you need to do more stuff with your function, you have to include curly brackets.