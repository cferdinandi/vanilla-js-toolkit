---
title: "Array.splice()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 40
---

Delete, replace, and add items to an array at specific indexes. The `Array.splice()` method accepts three arguments: `start`, `delete`, and `items`.

The first, `start`, is the index of the item you want to modify in the array. It's the only required argument.

The second, `delete`, is the number of items to delete from the array. If you omit this argument, the `Array.splice()` method will remove every item from the `start` index on. If you set it to `0`, it won't remove any items.

Finally, if you want to insert one or more items into the array, you can pass them in as additional arguments.

```javascript
var sandwiches = ['turkey', 'tuna', 'ham', 'pb&j'];

// Remove "ham" from the array
// It has an index of 2, and we only want to remove 1 item
sandwiches.splice(2, 1);

// Add "italian" between "tuna" and and "ham"
// Our target index is 2, we want to remove 0 items, and add "italian"
sandwiches.splice(2, 0, 'italian');

// Replace "tuna" with "chicken salad"
// It has an index of 1, we want to remove 1 item, and add "chicken salad"
sandwiches.splice(1, 1, 'chicken salad');
```