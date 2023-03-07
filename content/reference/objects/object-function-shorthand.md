---
title: "Object Function Shorthand"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "A shorthand for defining functions in an object."
weight: 70
---

Instead of creating a key name and then writing `function () {}`, you can add a named function _without_ the `function` keyword.

```javascript
let wizard = {

	// The old way of adding functions
	summon: function () {
		console.log('From out of thin air, watch me make a bear');
	},

	// The ES6 shorthand way
	vanish () {
		console.log(`Now you see me, now you don't.`);
	}

};
```