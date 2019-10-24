---
title: "timeFromNow.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Get the amount of time from now for a date."
how: "https://gomakethings.com/a-vanilla-js-alternative-to-the-moment.js-timefromnow-method/"
demo: "https://codepen.io/cferdinandi/pen/Vwwbpyr"
weight: 10
noIndex: false
---

```js
/*!
 * Get the amount of time from now for a date
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String|Date} time The date to get the time from now for
 * @return {Object}           The time from now data
 */
var timeFromNow = function (time) {

	// Get timestamps
	var unixTime = new Date(time).getTime();
	if (!unixTime) return;
	var now = new Date().getTime();

	// Calculate difference
	var difference = (unixTime / 1000) - (now / 1000);

	// Setup return object
	var tfn = {};

	// Check if time is in the past, present, or future
	tfn.when = 'now';
	if (difference > 0) {
		tfn.when = 'future';
	} else if (difference < -1) {
		tfn.when = 'past';
	}

	// Convert difference to absolute
	difference = Math.abs(difference);

	// Calculate time unit
	if (difference / (60 * 60 * 24 * 365) > 1) {
		// Years
		tfn.unitOfTime = 'years';
		tfn.time = Math.floor(difference / (60 * 60 * 24 * 365));
	} else if (difference / (60 * 60 * 24 * 45) > 1) {
		// Months
		tfn.unitOfTime = 'months';
		tfn.time = Math.floor(difference / (60 * 60 * 24 * 45));
	} else if (difference / (60 * 60 * 24) > 1) {
		// Days
		tfn.unitOfTime = 'days';
		tfn.time = Math.floor(difference / (60 * 60 * 24));
	} else if (difference / (60 * 60) > 1) {
		// Hours
		tfn.unitOfTime = 'hours';
		tfn.time = Math.floor(difference / (60 * 60));
	} else {
		// Seconds
		tfn.unitOfTime = 'seconds';
		tfn.time = Math.floor(difference);
	}

	// Return time from now data
	return tfn;

};
```