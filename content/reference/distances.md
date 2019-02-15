---
title: "Distances"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
anchors: true
weight: 130
---

## `pageYOffset`

Get the distance the user has scrolled from the top of the page.

```javascript
var distance = window.pageYOffset;
```



## Get an element's distance from the top of the page

[`getOffsetTop()` is a helper method](/helpers/getoffsettop/) I wrote to get an element's distance from the top of the document.

```javascript
var elem = document.querySelector('#some-element');
var distance = getOffsetTop(elem);
```