---
title: "XMLHttpRequest() (XHR)"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Make an asynchronous HTTP request."
polyfills: "Works back to IE7.<br><br>XHR is verbose and a bit clunky to work with. I maintain [Atomic, a promise-based Ajax/XHR helper library](https://github.com/cferdinandi/atomic)."
weight: 160
---

XHR requests are a three step process:

1. Set up our request by creating a new `XMLHttpRequest()`.
2. Create an `onreadystatechange` callback to run when the request state changes.
3. Open and send our request.

```javascript
// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process request state changes
xhr.onreadystatechange = function () {

	// Only run if the request is complete
	if (xhr.readyState !== 4) return;

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// This will run when the request is successful
		// It checks to make sure the status code is in the 200 range
		console.log('success!', xhr);
	} else {
		// This will run when it's not
		console.log('The request failed!');
	}

	// This will run either way
	// All three of these are optional, depending on what you're trying to do
	console.log('This always runs...');

};

// Create and send a GET request
// The first argument is the request type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();
```
