---
title: "Strings"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
anchors: true
weight: 60
---

## `String.indexOf()`

Determine if a string contains a substring. It returns the index of where the substring starts in the string, or `-1` if the substring isn't found. It's case-sensitive.

```javascript
var str = 'I love Cape Cod potato chips.';

// Returns 7
str.indexOf('Cape Cod');

// Returns 7
str.indexOf('Cape C');

// Returns -1
str.indexOf('cape cod');
```

If you just need a boolean `true`/`false` test, you can do this:

```javascript
if (str.indexOf('Cape Cod') > -1) {
	console.log('It contains the string');
}
```

*Works back to at least IE6.*



## `replace()`

Replace a portion of text in a string with something else.

```javascript
var text = 'I love Cape Cod potato chips!';
var lays = text.replace('Cape Cod', 'Lays');
var soda = text.replace('Cape Cod potato chips', 'soda');
var extend = text.replace('Cape Cod', 'Cape Cod salt and vinegar');

// lays: 'I love Lays potato chips!'
// soda: 'I love soda!'
// extend: 'I love Cape Cod salt and vinegar potato chips!'
```

By default, the `replace()` method replaces the first match. To replace all matches, you'll need to pass in a regular expression with the global flag (`g`).

*Works back to at least IE6.*



## `toLowerCase()`

Transform all text in a string to lowercase.

```javascript
var text = 'This sentence has some MIXED CASE LeTTeRs in it.';
var lower = text.toLowerCase();
// returns 'this sentence has some mixed case letters in it.'
```

*Works back to at least IE6.*



## `toUpperCase()`

Transform all text in a string to uppercase.

```javascript
var text = 'This sentence has some MIXED CASE LeTTeRs in it.';
var upper = text.toUpperCase();
// returns 'THIS SENTENCE HAS SOME MIXED CASE LETTERS IN IT.'
```

*Works back to at least IE6.*



## `parseInt()`

Convert a string into an integer (a whole number). The second argument, `10`, is called the `radix`. This is the base number used in mathematical systems. For our use, it should always be `10`.

```javascript
// returns 42
parseInt('42', 10);

// also returns 42
parseInt('42px', 10);
```

*Works back to at least IE6.*



## `parseFloat()`

Convert a string into a point number (a number with decimal points).

```javascript
// returns 3.14
parseFloat('3.14');

// also returns 3.14
parseFloat('3.14someRandomStuff');

// returns 3
console.log(parseFloat('3'));
```

*Works back to at least IE6.*



## `Number()`

Convert a string to a number.

Sometimes it returns integer. Other times it returns a float. And if you pass in a string with random text in it, you’ll get `NaN`, an acronym for "Not a Number."

```javascript
// returns 123
Number('123');

// returns 12.3
Number('12.3');

// returns NaN
Number('3.14someRandomStuff');
```

*Works back to at least IE6.*



## `slice()`

Get a portion of a string starting (and optionally ending) at a particular character.

The first argument is where to start. Use `0` to include the first character. The second argument is where to end (and is optional). If either argument is a negative integer, it will start at the end of the string and work backwards.

```javascript
var text = 'Cape Cod potato chips';
var startAtFive = text.slice(5);
var startAndEnd = text.slice(5, 8);
var sliceFromTheEnd = text.slice(0, -6);

// startAtFive: 'Cod potato chips'
// startAndEnd: 'Cod'
// sliceFromTheEnd: 'Cape Cod potato'
```

*Works back to at least IE6.*



## `split()`

Convert a string into an array by splitting it after a specific character (or characters).

The first argument, the `delimiter`, the character or characters to split by. As an optional second argument, you can stop splitting your string after a certain number of delimiter matches have been found.

```javascript
var shoppingList = 'Soda, turkey sandwiches, potato chips, chocolate chip cookies';
var menu = shoppingList.split(', ');
var limitedMenu = shoppingList.split(', ', 2);

// menu: ["Soda", "turkey sandwiches", "potato chips", "chocolate chip cookies"]
// limitedMenu: ["Soda", "turkey sandwiches"]
```

*Works back to at least IE6.*



## Combing Strings

You can use *string concatenation* to combine two or more strings together. Combine strings using the addition operator (`+`).

```javascript
/**
 * Strings as variables
 */

var str1 = 'I love Cape Cod potato chips.';
var str2 = 'What about you?';
var concat = str1 + ' ' + str2;

// Logs "I love Cape Cod potato chips. What about you?"
console.log(concat);


/**
 * Creating a new variable from two strings
 */

var concat2 =
	'I love Cape Cod potato chips. ' +
	'What about you?';

// Logs "I love Cape Cod potato chips. What about you?"
console.log(concat2);
```

*Works back to at least IE6.*



## Template Literals

Introduced in ES6, *template literals* provide a simpler way to create multi-line strings.

Start the template literal with a backtick (`` ` ``) at the beginning and end. You can use placeholder variables (often called *expressions*) by wrapping the name of a variable in curly brackets with a leading dollar sign (`${VARIABLE_NAME}`).

```javascript
// Basic template literal
var concat =
	`I love Cape Cod potato chips.
	what about you?`;

console.log(concat);


// Template literal with placeholder variables
var brand = 'Cape Cod';
var person = 'you';
var concat2 =
	`I love ${brand} potato chips.
	what about ${person}?`;

console.log(concat2);
```

*Work in all modern browsers, including MS Edge, but have no IE support. They __cannot__ be polyfilled.*