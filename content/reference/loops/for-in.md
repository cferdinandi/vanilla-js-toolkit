---
title: "for...in"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
polyfills: "Works back to at least IE6."
weight: 20
---

Similar to a `for` loop, but used to loop through objects.

```javascript
var lunch = {
	sandwich: 'ham',
	snack: 'chips',
	drink: 'soda',
	desert: 'cookie',
	guests: 3,
	alcohol: false,
};

for (var key in lunch) {
	if (lunch.hasOwnProperty(key)) {
		console.log(key); // key
		console.log(lunch[key]); // value
	}
}

// returns sandwich, ham, snack, chips, drink, soda, desert, cookie, guests, 3, alcohol, false
```