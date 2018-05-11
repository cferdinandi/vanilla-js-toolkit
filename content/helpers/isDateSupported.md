---
title: "isDateSupported.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: 'Test if input[type="date"] is supported by the browser.'
weight: 10
noIndex: false
---

Test if `input[type="date"]` is supported by the browser. {{<learn-how url="https://gomakethings.com/how-to-check-if-a-browser-supports-native-input-date-pickers/">}}

```js
/**
 * Test if the browser supports input[type="date"]
 * @return {Boolean} Returns true if it's supported
 */
var isDateSupported = function () {
	var input = document.createElement('input');
	var value = 'a';
	input.setAttribute('type', 'date');
	input.setAttribute('value', value);
	return (input.value !== value);
};
```