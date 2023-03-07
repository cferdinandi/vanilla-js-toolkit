---
title: "Side effects"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Import all modules from a file."
weight: 40
---

In ES modules, _side effects_ are "things that happen" in the module automatically, without the need for the developer to explicitly run a function.

ES modules don't _need_ to have an `export`, and when you `import` a module, you don't _have_ to access any exports if it has them. Anything that runs as part of the imported file will run automatically when imported.

```js
// sayHi.js
function sayHi () {
	console.log('Hello there!');
}

// Run on init
sayHi();
```

```js
// "Hello there!" will be automatically logged 
import './sayHi.js';
```