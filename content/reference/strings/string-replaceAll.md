---
title: "String.replaceAll()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Replace all instances of a string inside another string."
weight: 70
---

Replace all instances of a string inside another string, without the need for a regular expression. The `String.replaceAll()` method accepts two arguments: the string to find, and the string to replace it with.

```javascript
// Awkwardly worded, but roll with it
let wizards = 'Of all the wizards in Lord of the Rings, Radagast is my favorite of the wizards.';

// returns "Of all the sorcerers in Lord of the Rings, Radagast is my favorite of the sorcerers."
let sorcerers = wizards.replaceAll('wizards', 'sorcerers');
```

_The `String.replaceAll()` method works in all modern browsers, with the exception of the Samsung Internet mobile browser. [You can add support with a polyfill.](https://vanillajstoolkit.com/polyfills/stringreplaceall/)_