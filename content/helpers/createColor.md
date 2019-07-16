---
title: "createColor.js"
date: 2018-01-24T12:16:26-05:00
draft: false
description: "Create a random color value."
how: "https://gomakethings.com/a-better-better-way-to-generate-a-random-color-with-vanilla-js/"
demo: "https://codepen.io/cferdinandi/pen/yWdZmr"
weight: 10
noIndex: false
---

```js
/*!
 * Create a random color value.
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @return {String} A random six-digit color hexcode
 */
var createColor = function () {

	// The available hex options
	var hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	/**
	 * Randomly shuffle an array
	 * https://stackoverflow.com/a/2450976/1293256
	 */
	var shuffle = function () {

		var currentIndex = hex.length;
		var temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = hex[currentIndex];
			hex[currentIndex] = hex[randomIndex];
			hex[randomIndex] = temporaryValue;
		}

	};

	/**
	 * Create a six-digit hex color
	 */
	var hexColor = function () {

		var color = '#';

		for (var i = 0; i < 6; i++) {

			// Shuffle the hex values
			shuffle(hex);

			// Append first hex value to the string
			color += hex[0];

		}

		return color;

	};

	// Return the color string
	return hexColor();

};
```