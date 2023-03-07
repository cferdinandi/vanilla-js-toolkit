---
title: "Object Destructuring"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Assign variables from object properties."
weight: 20
---

A way to assign variables from object properties. 

Define _an object of variables_, and the destructuring syntax will pull the properties at the matching keys out and assign them to the variables.

```javascript
let movies = {
	disney: 'Moana',
	pixar: 'Up',
	dreamworks: 'How to Train Your Dragon',
	nickelodeon: 'Wonder Park'
};

let {disney, pixar, dreamworks, nickelodeon} = movies;

// logs "Up"
console.log(pixar);
```

You can also rename a variable to something different than its key in the object. In your object variable, add a colon (`:`) and the new variable name you'd like to use.

```javascript
let {disney, pixar, dreamworks, nickelodeon: nick} = movies;

// logs "Wonder Park"
console.log(nick);
```