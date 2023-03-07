---
title: "for...in"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Loop over plain objects."
weight: 30
---

Loop over plain objects (`{}`).

```javascript
let lunch = {
	sandwich: 'ham',
	snack: 'chips',
	drink: 'soda',
	desert: 'cookie',
	guests: 3,
	alcohol: false,
};

// logs "sandwich", "ham", "snack", "chips", "drink", "soda", "desert", "cookie", "guests", 3, "alcohol", false
for (let key in lunch) {
	console.log(key); // key
	console.log(lunch[key]); // value
}
```