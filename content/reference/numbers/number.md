---
title: "Number()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 30
---

Convert a string to a number.

Sometimes it returns integer. Other times it returns a float. And if you pass in a string with random text in it, you’ll get `NaN`, an acronym for *Not a Number*.

```javascript
// returns 123
Number('123');

// returns 12.3
Number('12.3');

// returns NaN
Number('3.14someRandomStuff');
```