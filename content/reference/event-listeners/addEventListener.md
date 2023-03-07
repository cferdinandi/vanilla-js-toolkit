---
title: "Element.addEventListener()"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Listen for events on an element."
weight: 10
---

Listen for events on an element. [You can find a full list of available events on the Mozilla Developer Network.](https://developer.mozilla.org/en-US/docs/Web/Events)

```javascript
let btn = document.querySelector('#click-me');

btn.addEventListener('click', function (event) {
	console.log(event); // The event details
	console.log(event.target); // The clicked element
});
```

Certain events, like `focus`, don't bubble. In order to use event delegation with events that don't bubble, you can set an optional third argument on the `EventTarget.addEventListener()` method, called `useCapture`, to `true`.

```javascript
// Listen for all focus events in the document
document.addEventListener('focus', function (event) {
	// Run functions whenever an element in the document comes into focus
}, true);
```