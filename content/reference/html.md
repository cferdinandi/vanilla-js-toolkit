---
title: "HTML and Text"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
anchors: true
weight: 90
---

## `innerHTML`

Get and set HTML content for an element.

*__Note:__ using `innerHTML` with third-party or user-submitted content can expose you to cross-site scripting (XSS) attacks.*

```javascript
var elem = document.querySelector('#some-elem');

// Get HTML content
var html = elem.innerHTML;

// Set HTML content
elem.innerHTML = 'We can dynamically change the HTML. We can even include HTML elements like <a href="#">this link</a>.';

// Add HTML to the end of an element's existing content
elem.innerHTML += ' Add this after what is already there.';

// Add HTML to the beginning of an element's existing content
elem.innerHTML = 'We can add this to the beginning. ' + elem.innerHTML;

// You can inject entire elements into other ones, too
elem.innerHTML += '<p>A new paragraph</p>';
```

*Works back to IE9, but `table` and `select` elements require IE10 and above.*



## `textContent`

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