---
title: "getNextDay.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get the date for a specific day of the week."
how: "https://gomakethings.com/how-to-get-the-date-for-a-specific-day-of-the-week-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/wvGNrOe"
weight: 10
noIndex: false
---

```js
/*!
 * Get the date for a specific day of the week
 * (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} dayName The day of the week (case-insensitive)
 * @return {Date}           The date object
 */
var getNextDay = function (dayName) {

	// The current day
	var date = new Date();
	var now = date.getDay();

	// Days of the week
	var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

	// The index for the day you want
	var day = days.indexOf(dayName.toLowerCase());

	// Find the difference between the current day and the one you want
	// If it's the same day as today (or a negative number), jump to the next week
	var diff = day - now;
	diff = diff < 1 ? 7 + diff : diff;

	// Get the timestamp for the desired day
	var nextDayTimestamp = date.getTime() + (1000 * 60 * 60 * 24 * diff);

	// Get the next day
	return new Date(nextDayTimestamp);

};
```