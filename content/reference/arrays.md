---
title: "Arrays"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
anchors: true
weight: 70
---

## `push()`

Add items to an array.

```javascript
var sandwiches = ['turkey', 'tuna', 'blt'];
sandwiches.push('chicken', 'pb&j');
// sandwiches: ['turkey', 'tuna', 'blt', 'chicken', 'pb&j']
```

*Works back to IE6.*



## `Array.concat()`

Merge two or more arrays together. It returns a new array.

```javascript
var sandwiches1 = ['turkey', 'tuna', 'blt'];
var sandwiches2 = ['chicken', 'pb&j'];
var allSandwiches = sandwiches1.concat(sandwiches2);
// sandwiches1: ['turkey', 'tuna', 'blt']
// sandwiches2: ['chicken', 'pb&j']
// allSandwiches: ['turkey', 'tuna', 'blt', 'chicken', 'pb&j']
```

*Works back to at least IE6.*



## `Array.slice`

Copy items into a new array.

The first argument is the array index to start at, and the second is the index to end on. Both are optional. If you omit the start index, it will start at the beginning. If you omit the end index, it will go to the end.

```javascript
var sandwiches = ['turkey', 'tuna', 'chicken salad', 'italian', 'blt', 'grilled cheese'];

// ['chicken salad', 'italian', 'blt', 'grilled cheese']
var fewerSandwiches = sandwiches.slice(2);

// ['chicken salad', 'italian', 'blt']
var fewerSandwiches2 = sandwiches.slice(2, 4);

// Clone an array
var sandwichesCopy = sandwiches.slice();
```

*Works back to IE6.*



## `Array.from()`

Create a new array from an array or array-like object (such as a `NodeList`).

```javascript
var sandwiches = Array.from(document.querySelectorAll('.sandwich'));
```

*Works in all modern browsers, included Edge, but not IE. [Use with a polyfill.](/polyfills/arrayfrom/)*



## `Array.filter()`

Create a new array with only elements that pass a test you include as a callback function. The callback accepts three arguments: the current item in the loop's value, its index, and the array itself.

```javascript
// Create a new array with only numbers greater than 10
var newArray = [1, 2, 7, 42, 99, 101].filter(function (item) {
	return item > 10;
});

// Logs [42, 99, 101]
console.log(newArray);
```



## `Array.map()`

Iterate through each item in an array, transform it, and return a new array. The callback accepts three arguments: the current item in the loop's value, its index, and the array itself.

```javascript
/**
 * Double each number in an array
 */

var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
	return num * 2;
});

// Logs [2, 8, 18]
console.log(doubles);


/**
 * Get an array of just names
 */
var data = [
	{
		name: 'Kyle',
		occupation: 'Fashion Designer'
	},
	{
		name: 'Liza',
		occupation: 'Web Developer'
	},
	{
		name: 'Emily',
		occupation: 'Web Designer'
	},
	{
		name: 'Melissa',
		occupation: 'Fashion Designer'
	},
	{
		name: 'Tom',
		occupation: 'Web Developer'
	}
];

var names = data.map(function (item) {
	return item.name;
});

// Logs ["Kyle", "Liza", "Emily", "Melissa", "Tom"]
console.log(names);
```



## `Array.reduce()`

Take the content of an array and return a single value. That value can be anything: a string, number, object, or even another array.

Accepts two arguments: a callback method to run against each item in the array, and a starting value. The callback also accepts two arguments: the `accumulator`, which is the current combined value, and the `current` item in the loop.

Whatever you return is used as the accumulator for the next item in the loop. On the very first loop, that starting value is used instead.

```javascript
/**
 * Add all of the numbers in an array
 */

var total = [1, 2, 3].reduce(function (sum, current) {
	return sum + current;
}, 0);

// Logs 6
console.log(total);


/**
 * Create a new array with only the names of wizards in Huffepuff
 */

var wizards = [
	{
		name: 'Harry Potter',
		house: 'Gryfindor'
	},
	{
		name: 'Cedric Diggory',
		house: 'Hufflepuff'
	},
	{
		name: 'Tonks',
		house: 'Hufflepuff'
	},
	{
		name: 'Ronald Weasley',
		house: 'Gryfindor'
	},
	{
		name: 'Hermione Granger',
		house: 'Gryfindor'
	}
];

// This combines what you would otherwise do with map() and filter() into one step
var hufflepuff = wizards.reduce(function (newArr, wizard) {
	if (wizard.house === 'Hufflepuff') {
		newArr.push(wizard.name);
	}
	return newArr;
}, []);

// Logs ["Cedric Diggory", "Tonks"]
console.log(hufflepuff);
```



## `Array.find()`

The `Array.find()` method returns the first element in an array that satisfies the conditions you specify in a callback function. If no match is found, it returns `undefined`.

The callback accepts an argument to represent the current item in the array loop.

```javascript
/**
 * Get the first item greater than 10
 */

// Returns 12
var greaterThanTen = [1, 12, 25, 42, 99, 101].find(function (item) {
	return item > 10;
});

// Returns undefined
var greaterThanTen = [1, 2, 4, 7, 8].find(function (item) {
	return item > 10;
});
```

*Works in all modern browsers, including Edge, but not IE. [Use with a polyfill.](/polyfills/arrayfind/)*



## `Array.reverse()`

Reverse the order of items in an array.

```javascript
var count = [1, 2, 3, 4, 5];

// Reverse the array order
count.reverse();

// Logs [5, 4, 3, 2, 1]
console.log(count);
```

*Works back to at least IE6.*



## `Array.join()`

Concatenate all items in an array into a string, separated by a delimiter that you can pass in as an argument. By default, it will use a comma (`,`) as the delimiter if one is not provided.

```javascript
var strings = [
	'I love Cape Cod potato chips.',
	'What about you?'
];

var concat = strings.join();
var concatWithSpace = strings.join(' ');
var concatWithSmiley = strings.join(' =) ');

// Logs "I love Cape Cod potato chips.,What about you?"
console.log(concat);

// Logs "I love Cape Cod potato chips. What about you?"
console.log(concatWithSpace);

// Logs "I love Cape Cod potato chips. =) What about you?"
console.log(concatWithSmiley);
```

*Works back to at least IE6.*