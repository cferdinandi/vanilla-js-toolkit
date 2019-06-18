---
title: "Array.join()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 100
---

Combine all items in an array into a string, separated by a delimiter that you can pass in as an argument. By default, it will use a comma (`,`) as the delimiter if one is not provided.

```javascript
var strings = [
	'I love Cape Cod potato chips.',
	'What about you?'
];

var concat = strings.join();
var concatWithSpace = strings.join(' ');
var concatWithSmiley = strings.join(' =) ');

// logs "I love Cape Cod potato chips.,What about you?"
console.log(concat);

// logs "I love Cape Cod potato chips. What about you?"
console.log(concatWithSpace);

// logs "I love Cape Cod potato chips. =) What about you?"
console.log(concatWithSmiley);
```