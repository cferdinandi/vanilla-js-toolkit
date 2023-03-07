---
title: "Number()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Convert a string into a number."
weight: 30
---

Convert a string to a number.

Sometimes it returns integer. Other times it returns a float. And if you pass in a string with random text in it, you’ll get `NaN`, an acronym for *Not a Number*.

As a result of this inconsistency, it’s generally safer to use `parseInt()` or `parseFloat()`. If you know the format of the number you’d like, use those instead. If you want the string to fail with `NaN` if it has other characters in it, though, `Number()` may actually be a better choice.

```javascript
// returns 123
Number('123');

// returns 12.3
Number('12.3');

// returns NaN
Number('3.14someRandomStuff');
```