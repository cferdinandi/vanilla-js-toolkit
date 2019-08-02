---
title: "formatDate.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Convert a timestamp into a date."
how: "https://gomakethings.com/formatting-dates-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/ZgJZpg"
weight: 10
noIndex: false
---

```js
/*!
 * Convert a timestamp into a date
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param   {String|Integer}  timestamp  The timestamp in unix of YYYY-MM-DD HH:MM:SS format
 * @returns {String}                     A formatted date
 */
var formatDate = function (timestamp) {

	// Create a date object from the timestamp
	var date = new Date(timestamp);

	// Create a list of names for the months
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];

	// return a formatted date
	return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

};
```