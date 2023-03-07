---
title: "Default Parameters"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Define default values for function parameters."
weight: 20
---

Set a default value for each parameter by adding `= default value` when defining it.

```javascript
function add (num1 = 0, num2 = 0) {

	// Add the numbers
	// If num1 or num2 is not provided, 0 will be used
	return num1 + num2;

}

// returns 4
add(4);
```