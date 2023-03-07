---
title: "String.split()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Convert a string to an array."
weight: 90
---

Convert a string into an array by splitting it after a specific character (or characters).

The first argument, the `delimiter`, the character or characters to split by. As an optional second argument, you can stop splitting your string after a certain number of delimiter matches have been found.

```javascript
let shoppingList = 'Soda, turkey sandwiches, potato chips, chocolate chip cookies';
let menu = shoppingList.split(', ');
let limitedMenu = shoppingList.split(', ', 2);

// logs ["Soda", "turkey sandwiches", "potato chips", "chocolate chip cookies"]
console.log(menu);

// logs ["Soda", "turkey sandwiches"]
console.log(limitedMenu);
```