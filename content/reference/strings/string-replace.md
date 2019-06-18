---
title: "String.replace()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 60
---

Replace a portion of text in a string with something else. The `replace()` method accepts two arguments: the string to find, and the string to replace it with.

```javascript
var text = 'I love Cape Cod potato chips!';

// returns "I love Lays potato chips!"
text.replace('Cape Cod', 'Lays');
```

By default, the `replace()` method replaces the first match. To replace all matches, you'll need to pass in a regular expression with the global flag (`g`).

```javascript
var chips = 'Cape Cod potato chips are my favorite brand of chips.';

// Only replaces the first instance of the word "chips"
chips.replace('chips', 'deep fried potato slices');

// Replaces all instances of the word "chips"
chips.replace(new RegExp('chips', 'g'), 'deep fried potato slices');
```