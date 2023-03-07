---
title: "Element.outerHTML"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get and set HTML content _including_ an element."
weight: 20
---

Get and set the HTML content _including_ an element. This works the same as `Element.innerHTML`, but includes the element itself when getting and updating HTML content.

```html
<div class="greeting">
	<p>Hello world!</p>
</div>
```

```javascript
let greeting = document.querySelector('.greeting');

// Get HTML content
// returns "<div class="greeting"><p>Hello world!</p></div>"
let html = greeting.outerHTML;

// Set HTML content
// This completely replaces the <div class="greeting"></div> element and all of its content
greeting.outerHTML = '<p class="outro">Goodbye, friend! <a href="exit.html">Click here to leave.</a>';

// Add HTML after the element (and outside of it)
greeting.outerHTML += ' Add this after what is already there.';

// Add HTML before the element (and outside of it)
greeting.outerHTML = 'We can add this to the beginning. ' + greeting.innerHTML;
```