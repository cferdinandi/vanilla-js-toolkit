---
title: "Cookies"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Get and set cookie values."
weight: 10
---

You can use the `document.cookie` property to set a cookie.

It's a string, using a `{KEY}={VALUE};` format. Cookies can only contain string values.

```javascript
// Set a cookie named sandwich, with a value of turkey
document.cookie = 'sandwich=turkey;';
```

Cookies can also include several optional settings, most using a `key=value` format, separated by a semicolon (`;`).

- **`path={path}`** - The path to set the cookie at. Defaults to the current path. It might be a good idea to set this to the root path: `path=/`.
- **`domain={domain}`** - The domain for the cookie. Defaults to the current host name.
- **`max-age={max age in seconds}`** - The maximum amount of time to keep the cookie, in seconds.
- **`expires={date in GMT form}`** - A date on which to expire the cookie.
- **`secure`** - The cookie can only be transmitted over HTTPS.
- **`same-site={lax|strict|none}`** - Whether or not the browser can send the cookie to other sites. The default, `lax`, only sends with same-site requests and navigation `GET` requests; `strict` does not send to any external sites, even when following a link; and `none` does not place any restrictions.

```javascript
// set to the root path
// expires in two weeks: 60 seconds x 60 minutes x 24 hours x 14 days
// (we'll look at the math behind this in the next section)
document.cookie = `snack=chips; path=/; max-age=${60 * 60 * 24 * 14};`;
```

If you do not set either a `max-age` or `expires` value, cookies can potentially remain in the browser indefinitely. As a best practice, you should generally always set one of the two values.

You can use the `document.cookie` property to get the cookies for a site. However, all of the cookies for a site are stored as a single string, which makes getting the value of one of them a bit tedious.

[The `getCookie()` helper method](https://vanillajstoolkit.com/helpers/getcookie/) makes this easier.

```javascript
let sandwich = getCookie('sandwich');
let snack = getCookie('snack');
```

To delete a cookie, you set it again with a `max-age` of `0` or an `expires` date to the current time or sooner. The cookie value can be anything.

Be sure that the `path` matches the one used to set the cookie, or it will not work.

```javascript
// Delete the cookie
document.cookie = `sandwich=turkey; path=/; max-age=0;`;
```