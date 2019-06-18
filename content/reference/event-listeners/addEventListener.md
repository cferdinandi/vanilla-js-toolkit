---
title: "Element.addEventListener()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
weight: 10
---

Listen for events on an element. [You can find a full list of available events on the Mozilla Developer Network.](https://developer.mozilla.org/en-US/docs/Web/Events)

```javascript
var btn = document.querySelector('#click-me');

btn.addEventListener('click', function (event) {
	console.log(event); // The event details
	console.log(event.target); // The clicked element
}, false);
```