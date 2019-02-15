---
title: "Browser Storage"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
anchors: true
weight: 140
---

## Cookies

Use `document.cookie` to set a cookie. It's a string, using a `{KEY}={VALUE};` format. Optionally, you can pass in an expiration date as a timestamp using the `expires={VALUE}` format.

Cookies can only contain string values.

```javascript
// Set a cookie named sandwich, with a value of turkey
// Cookie expires on December 31, 2024 at 11:59 and 59 seconds PM
document.cookie = 'sandwich=turkey; expires=Fri, 31 Dec 2024 23:59:59 GMT';
```

*Works back to at least IE6.*

For more complex cookie work, I wrote [a small helper library that makes working with cookies easier](https://github.com/cferdinandi/jar).



## `localStorage`

Use the local storage API to store data locally that the browser can access later. Data is stored indefinitely, and must be a string.

```javascript
// Store data
var someData = 'The data that I want to store for later.';
localStorage.setItem('myDataKey', someData);

// Get data
var data = localStorage.getItem('myDataKey');

// Remove data
localStorage.removeItem('myDatakey');
```

*Works back to IE8.*

For more complex `localStorage` management, I wrote [a small helper library](https://github.com/cferdinandi/bin).



## `sessionStorage`

Works just like `localStorage`, except the data is cleared when the browser session ends.

```javascript
// Store data
var someTempData = 'The data that I want to store temporarily.';
sessionStorage.setItem('myTempDataKey', someTempData);

// Get data
var tempData = sessionStorage.getItem('myTempDataKey');

// Remove data
sessionStorage.removeItem('myTempDatakey');
```

*Works back to IE8.*

For more complex `sessionStorage` management, I wrote [a small helper library](https://github.com/cferdinandi/bin).