---
title: "async & await"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Write asynchronous code like it's synchronous."
weight: 30
---

When you use the `async` operator before a `function`, you turn it into an _async function_.

Inside an _async function_, you can use the `await` operator before asynchronous code to tell the function to wait for that operation to complete before moving on.

To handle errors, wrap your code in a `try...catch()`.

```javascript
async function getAPIData () {
	try {
		let request = await fetch('https://jsonplaceholder.typicode.com/posts/');
		if (!request.ok) throw request;
		let response = await request.json();
		console.log(response);
	} catch (err) {
		console.warn(err);
	}
}

getAPIData();
```

_**Note:** an async function always returns a promise, even if you're not actually making any asynchronous calls in it._