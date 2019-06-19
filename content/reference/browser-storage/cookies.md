---
title: "Cookies"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Set cookie values."
polyfills: "Works back to at least IE6.<br><br>For more complex cookie work, I wrote [a small helper library that makes working with cookies easier](https://github.com/cferdinandi/jar)."
weight: 10
---

Use `document.cookie` to set a cookie. It's a string, using a `{KEY}={VALUE};` format. Optionally, you can pass in an expiration date as a timestamp using the `expires={VALUE}` format.

Cookies can only contain string values.

```javascript
// Set a cookie named sandwich, with a value of turkey
// Cookie expires on December 31, 2024 at 11:59 and 59 seconds PM
document.cookie = 'sandwich=turkey; expires=Fri, 31 Dec 2024 23:59:59 GMT';
```