---
title: "Element.textContent"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
weight: 20
---

Get the text of an element without its markup.

```javascript
var elem = document.querySelector('#some-elem');

// Get text content
var text = elem.textContent;

// Set text content
elem.textContent = 'We can dynamically change the content.';

// Add text to the end of an element's existing content
elem.textContent += ' Add this after what is already there.';

// Add text to the beginning of an element's existing content
elem.textContent = 'We can add this to the beginning. ' + elem.textContent;
```