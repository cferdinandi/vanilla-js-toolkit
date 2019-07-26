---
title: "Performance Test"
date: 2018-01-24T12:16:26-05:00
description: "Write simple vanilla JS performance tests."
draft: false
weight: 70
noIndex: false
---

[Read this article to learn more about this technique works.](https://gomakethings.com/how-to-test-vanilla-js-performance/)

## If you just want to log results to the console

```js
console.time('My awesome performance test!');
// Do some JS stuff...
console.timeEnd('My awesome performance test!');
// This will log "My awesome performance test!: 1234.567ms" (with the actual time, of course)
```

## If you want to render the results into the DOM/UI

```js
var start = performance.now();
// Do some JS stuff...
var end = performance.now();

console.log('This took ' + (end - start) + 'ms to complete');
```