---
title: "Reference Guide"
date: 2018-01-24T11:48:20-05:00
draft: false
noTitle: false
noIndex: false
anchors: true
---

A quick reference for commonly used JavaScript methods and browser APIs.

**Unless otherwise noted, these work in all modern browsers, and IE9+.** This can be extended back further with [polyfills](/polyfills).

{{<cta for="toolkit-snippets">}}

{{<toc>}}

## Selectors

### querySelectorAll()

Find all matching elements on a page. You can use any valid CSS selector.

```javascript
// Get all elements with the .bg-red class
var elemsRed = document.querySelectorAll('.bg-red');

// Get all elements with the [data-snack] attribute
var elemsSnacks = document.querySelectorAll('[data-snack]');
```

### querySelector()

Find the first matching element on a page.

```javascript
// The first div
var elem = document.querySelector('div');

// The first div with the .bg-red class
var elemRed = document.querySelector('.bg-red');

// The first div with a data attribute of snack equal to carrots
var elemCarrots = document.querySelector('[data-snack="carrots"]');

// An element that doesn't exist
var elemNone = document.querySelector('.bg-orange');
```

### matches()

Check if an element would be selected by a particular selector or set of selectors. Returns `true` if the element is a  match, and `false` when it's not.

```javascript
var elem = document.querySelector('#sandwich');
if (elem.matches('.turkey')) {
	console.log('It matches!');
} else {
	console.log('Not a match... =(');
}
```

*[Use with a polyfill.](/polyfills/matches/)*



## Loops

### `for` loops

Loop through array and array-like (ex. `NodeList`) lists items.

```javascript
var sandwiches = [
	'tuna',
	'ham',
	'turkey',
	'pb&j'
];

for (var i = 0; i < sandwiches.length; i++) {
	console.log(i) // index
	console.log(sandwiches[i]) // value
}

// returns 0, tuna, 1, ham, 2, turkey, 3, pb&j
```

*Works back to at least IE6.*

### `for...in`

Similar to a `for` loop, but used to loop through objects.

```javascript
var lunch = {
	sandwich: 'ham',
	snack: 'chips',
	drink: 'soda',
	desert: 'cookie',
	guests: 3,
	alcohol: false,
};

for (var key in lunch) {
	if (lunch.hasOwnProperty(key)) {
		console.log(key); // key
		console.log(lunch[key]); // value
	}
}

// returns sandwich, ham, snack, chips, drink, soda, desert, cookie, guests, 3, alcohol, false
```

*Works back to at least IE6.*

### `Array.forEach()`

Pass a callback function into `forEach()`. The first argument is the current item in the loop. The second is the current index in the array. You can name these two variables anything you want.

```javascript
var sandwiches = [
	'tuna',
	'ham',
	'turkey',
	'pb&j'
];

sandwiches.forEach(function (sandwich, index) {
	console.log(index) // index
	console.log(sandwich) // value
});

// returns 0, tuna, 1, ham, 2, turkey, 3, pb&j
```



## Classes

### classList

Add, remove, toggle, and check for the presence of a class.

```javascript
var elem = document.querySelector('#sandwich');

// Add a class
elem.classList.add('turkey');

// Remove a class
elem.classList.remove('tuna');

// Toggle a class
// (Add the class if it's not already on the element, remove it if it is.)
elem.classList.toggle('tomato');

// Check if an element has a specific class
if (elem.classList.contains('mayo')) {
	console.log('add mayo!');
}
```

*Works back to IE10. [Extend back to IE8 with a polyfill.](/polyfills/classlist/)*

### className

Get all of the classes on an element as a string, add a class or classes, or completely replace or remove all classes.

```javascript
var elem = document.querySelector('div');

// Get all of the classes on an element
var elemClasses = elem.className;

// Add a class to an element
elem.className += ' vanilla-js';

// Completely replace all classes on an element
elem.className = 'new-class';
```

*Works back to IE6.*



## Styles

### Inline Styles

Get and set inline styles for an element.

```javascript
var elem = document.querySelector('#sandwich');

// Get a style
// If this style is not set as an inline style directly on the element, it returns an empty string
// ex. <div id="sandwich" style="background-color: green"></div>
var bgColor = elem.style.backgroundColor; // this will return "green"
var fontWeight = elem.style.fontWeight; // this will return ""

// Set a style
elem.style.backgroundColor = 'purple';
```

*Works back to at least IE6.*

### Computed Styles

Get the actual computed style of an element. This factors in browser default stylesheets as well as external styles you've specified.

```javascript
var elem = document.querySelector('#some-elem');
var bgColor = window.getComputedStyle(elem).backgroundColor;
```



## Attributes

Get, set, remove, and check for the existence of attributes (including data attributes) on an element. These methods can also be used to manipulate other types of attributes---things like `id`, `tabindex`, `name`, and so on.

```javascript
var elem = document.querySelector('#lunch');

// Get the value of an attribute
var sandwich = elem.getAttribute('data-sandwich');

// Set an attribute value
elem.setAttribute('data-sandwich', 'turkey');

// Remove an attribute
elem.removeAttribute('data-chips');

// Check if an element has an attribute
if (elem.hasAttribute('data-drink')) {
	console.log('Add a drink!');
}
```

*Works back to at least IE6.*



## Event Listeners

Listen for events on an element. [You can find a full list of available events on the Mozilla Developer Network.](https://developer.mozilla.org/en-US/docs/Web/Events)

```javascript
var btn = document.querySelector('#click-me');

btn.addEventListener('click', function (event) {
	console.log(event); // The event details
	console.log(event.target); // The clicked element
}, false);
```



## Strings

### `String.indexOf()`

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

### `replace()`

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

### `toLowerCase()`

Transform all text in a string to lowercase.

```javascript
var text = 'This sentence has some MIXED CASE LeTTeRs in it.';
var lower = text.toLowerCase();
// returns 'this sentence has some mixed case letters in it.'
```

*Works back to at least IE6.*

### `toUpperCase()`

Transform all text in a string to uppercase.

```javascript
var text = 'This sentence has some MIXED CASE LeTTeRs in it.';
var upper = text.toUpperCase();
// returns 'THIS SENTENCE HAS SOME MIXED CASE LETTERS IN IT.'
```

*Works back to at least IE6.*

### `parseInt()`

Convert a string into an integer (a whole number). The second argument, `10`, is called the `radix`. This is the base number used in mathematical systems. For our use, it should always be `10`.

```javascript
// returns 42
parseInt('42', 10);

// also returns 42
parseInt('42px', 10);
```

*Works back to at least IE6.*

### `parseFloat()`

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

### `Number()`

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

### `slice()`

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

### `split()`

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

### Combing Strings

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

### Template Literals

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



## Arrays

### `push()`

Add items to an array.

```javascript
var sandwiches = ['turkey', 'tuna', 'blt'];
sandwiches.push('chicken', 'pb&j');
// sandwiches: ['turkey', 'tuna', 'blt', 'chicken', 'pb&j']
```

*Works back to IE6.*

### `Array.concat()`

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

### `Array.slice`

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

### `Array.from()`

Create a new array from an array or array-like object (such as a `NodeList`).

```javascript
var sandwiches = Array.from(document.querySelectorAll('.sandwich'));
```

*[Use with a polyfill.](/polyfills/arrayfrom/)*

### `Array.filter()`

Create a new array with only elements that pass a test you include as a callback function. The callback accepts three arguments: the current item in the loop's value, its index, and the array itself.

```javascript
// Create a new array with only numbers greater than 10
var newArray = [1, 2, 7, 42, 99, 101].filter(function (item) {
	return item > 10;
});

// Logs [42, 99, 101]
console.log(newArray);
```

### `Array.map()`

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

### `Array.find()`

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

*[Use with a polyfill.](/polyfills/arrayfind/)*

### `Array.reverse()`

Reverse the order of items in an array.

```javascript
var count = [1, 2, 3, 4, 5];

// Reverse the array order
count.reverse();

// Logs [5, 4, 3, 2, 1]
console.log(count);
```

*Works back to at least IE6.*

### `Array.join()`

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



## Objects

### `Object.assign()`

Perform a shallow merge of two or more objects. Pass in each object to merge as an argument.

*__Note:__ in a shallow merge, nested objects are overwritten completely rather than having their values merged together.*

```javascript
// Example objects
var object1 = {
	apple: 0,
	banana: {
		weight: 52,
		price: 100
	},
	cherry: 97
};

var object2 = {
	banana: {
		price: 200
	},
	durian: 100
};

var object3 = {
	apple: 'yum',
	pie: 3.214,
	applePie: true
};

// In this example, "banana" will only contain {price: 200}
// In a deep merge, it would contain {price: 200, weight: 52}
var mergedObjs = Object.assign(object1, object2, object3);
```

*[Use with a polyfill.](/polyfills/objectassign/)*

### Deep Merges

To support deep merges, [I wrote an `extend()` helper method](/helpers/extend/).

```javascript
// Example objects
var object1 = {
	apple: 0,
	banana: {
		weight: 52,
		price: 100
	},
	cherry: 97
};
var object2 = {
	banana: {
		price: 200
	},
	durian: 100
};
var object3 = {
	apple: 'yum',
	pie: 3.214,
	applePie: true
};

// Create a new object by combining two or more objects
var mergedShallow = extend(object1, object2, object3);
var mergedDeep = extend(true, object1, object2, object3);
var clonedObj = extend(object1);
```

*Works back to at least IE6.*

### Remove an item from an object

Use the `delete` operator to remove an item from an object.

```javascript
var lunch = {
	sandwich: 'turkey',
	chips: 'cape cod',
	drink: 'soda'
};

// Remove the chips key from the lunch object
delete lunch.chips;

// Logs {sandwich: 'turkey', drink: 'soda'}
console.log(lunch);
```

*Works back to at least IE6.*

### `Object.keys()`

Return an array of keys from an object. Pass in the object as an argument.

```javascript
var lunch = {
	sandwich: 'turkey',
	chips: 'cape cod',
	drink: 'soda'
};

// Logs ['sandwich', 'chips', 'drink']
console.log(Object.keys(lunch));

// Logs "sandwich", "turkey", "chips", "cape cod", "drink", "soda"
Object.keys(lunch).forEach(function (key) {
	console.log(key); // The key
	console.log(lunch[key]); // The value
});
```



## HTML & Text

### `innerHTML`

Get and set HTML content for an element.

*__Note:__ using `innerHTML` with third-party or user-submitted content can expose you to cross-site scripting (XSS) attacks.*

```javascript
var elem = document.querySelector('#some-elem');

// Get HTML content
var html = elem.innerHTML;

// Set HTML content
elem.innerHTML = 'We can dynamically change the HTML. We can even include HTML elements like <a href="#">this link</a>.';

// Add HTML to the end of an element's existing content
elem.innerHTML += ' Add this after what is already there.';

// Add HTML to the beginning of an element's existing content
elem.innerHTML = 'We can add this to the beginning. ' + elem.innerHTML;

// You can inject entire elements into other ones, too
elem.innerHTML += '<p>A new paragraph</p>';
```

*Works back to IE9, but `table` and `select` elements require IE10 and above.*

### `textContent`

Get the text of an element without its markup.

```javascript
var elem = document.querySelector('#some-elem');

// Get text content
var text = elem.textContent;

// Set text content
elem.textContent = 'We can dynamically change the content.';

// Add text to the end of an element's existing content
elem.textContent += ' Add this after what is already there.';

// Add text to the beginning of an element's existing content
elem.textContent = 'We can add this to the beginning. ' + elem.textContent;
```



## DOM Injection

### `createElement()`

Create an element.

```javascript
var div = document.createElement('div');
var link = document.createElement('a');
var article = document.createElement('article');
```

*Works back to at least IE6.*

### `insertBefore()`

The original way to add elements to the DOM. Call it on the parent of the element you’re inserting your new element before (the `referenceNode`), and pass in both the new element and the reference node as arguments.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.getElementById('some-element');

// Insert the new node before the reference node
referenceNode.parentNode.insertBefore(newNode, referenceNode);
```

You can also use it to inject an element *after* another one by using the `.nextSibling` property on your `referenceNode`.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.getElementById('#some-element');

// Insert the new node after the reference node
referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
```

*Works back to at least IE6.*

### `before()`

Insert an element before another one. Call the `before()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.querySelector('#some-element');

// Insert the new node before the reference node
referenceNode.before(newNode);
```

*[Use with a polyfill.](/polyfills/before/)*

### `after()`

Insert an element in the DOM after another one. Call the `after()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.querySelector('#some-element');

// Insert the new node after the reference node
referenceNode.after(newNode);
```

*[Use with a polyfill.](/polyfills/after/)*

### `prepend()`

Insert an element at the beginning of a set elements inside a shared parent. Call the `prepend()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('li');
newNode.textContent = 'I am new here.';

// Get the parent node
var referenceNode = document.querySelector('#some-element');

// Insert the new node before the first element in the reference node
referenceNode.prepend(newNode);
```

*[Use with a polyfill.](/polyfills/prepend/)*

### `append()`

Insert an element at the end of a set elements inside a shared parent. Call the `append()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('li');
newNode.textContent = 'I am new here.';

// Get the reference node
var referenceNode = document.querySelector('#some-element');

// Insert the new node after the last element in the reference node
referenceNode.append(newNode);
```

*[Use with a polyfill.](/polyfills/append/)*

### `appendChild()`

Insert an element at the end of a set of elements inside a shared parent. Call the `appendChild()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.querySelector('#some-element');

// Insert the new node after the last element in the parent node
referenceNode.appendChild(newNode);
```

*Works back to at least IE6.*

### `removeChild()`

Remove an element from the DOM. This method is called against the target element's parent, which you can get with `parentNode`.

```javascript
var elem = document.querySelector('#some-element');
elem.parentNode.removeChild(elem);
```

*Works back to at least IE6.*

### `remove()`

Remove an element from the DOM. Call the `remove()` method on the element you want to remove.

```javascript
var elem = document.querySelector('#some-element');
elem.remove();
```

*[Use with a polyfill.](/polyfills/remove/)*



## Traversing the DOM

### `parentNode`

Get the parent of an element.

```javascript
var elem = document.querySelector('#some-elem');
var parent = elem.parentNode;
```

You can also string them together to go several levels up.

```javascript
var levelUpParent = elem.parentNode.parentNode;
```

*Works back to at least IE6.*

### `closest()`

Get the closest parent up the DOM tree that matches against a selector. It also checks the element itself.

```javascript
var elem = document.querySelector('#some-elem');
var closestSandwich = elem.closest('[data-sandwich]');
```

*[Use with a polyfill.](/polyfills/closest/)*

### Child elements by selector

The `querySelector()` and `querySelectorAll()` APIs aren't limited to just running on the `document`. They can be run on any element to search only for elements inside of it.

```javascript
var elem = document.querySelector('#some-elem');

// Find the first element inside `#some-elem` that has a `[data-snack]` attribute
var snack = elem.querySelector('[data-snack]');

// Get all divs inside `#some-elem`
var divs = elem.querySelectorAll('div');
```

### `children`

While `querySelector()` and `querySelectorAll()` search through all levels within a nested DOM/HTML structure, you may want to just get immediate descendant elements of a particular element. Use the `.children` property for this.

```javascript
var elem = document.querySelector('#some-elem');
var descendants = wrapper.children;
```

### `childNodes`

Works similar to `.children`, but also finds text fragments and other non-element nodes.

```javascript
var elem = document.querySelector('#some-elem');
var descendants = wrapper.childNodes;
```

*Works back to at least IE6.*

### Get sibling elements

[`getSiblings()` is a helper method](/helpers/getsiblings/) I wrote that gets the siblings of an element in the DOM. For example: if you had a list item (`<li>`) and wanted to grab all of the other items in the list.

```javascript
var elem = document.querySelector('#some-element');
var siblings = getSiblings(elem);
```



## The Viewport

### Get the viewport height

There are two methods to get the viewport height: `window.innerHeight` and `document.documentElement.clientHeight`. The former is more accurate. The latter has better browser support.

To get the best of both worlds, try `innerHeight` first, and fallback to `clientHeight` if not supported.

```javascript
var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
```

### Get the viewport width

There are two methods to get the viewport width: `window.innerWidth` and `document.documentElement.clientWidth`. The former is more accurate. The latter has better browser support.

To get the best of both worlds, try `innerWidth` first, and fallback to `clientWidth` if not supported.

```javascript
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
```

### Check if an element is in the viewport

[`isInViewport()` is a helper method](/helpers/isinviewport/) I wrote to check if any part of an element is in the viewport. It returns `true` if any part of the element is in the viewport, and `false` if it's not.

```javascript
var elem = document.querySelector('#some-element');
isInViewport(elem); // Boolean: returns true/false
```



## Distances

### `pageYOffset`

Get the distance the user has scrolled from the top of the page.

```javascript
var distance = window.pageYOffset;
```

### Get an element's distance from the top of the page

[`getOffsetTop()` is a helper method](/helpers/getoffsettop/) I wrote to get an element's distance from the top of the document.

```javascript
var elem = document.querySelector('#some-element');
var distance = getOffsetTop(elem);
```



## Browser Storage

### Cookies

Use `document.cookie` to set a cookie. It's a string, using a `{KEY}={VALUE};` format. Optionally, you can pass in an expiration date as a timestamp using the `expires={VALUE}` format.

Cookies can only contain string values.

```javascript
// Set a cookie named sandwich, with a value of turkey
// Cookie expires on December 31, 2024 at 11:59 and 59 seconds PM
document.cookie = 'sandwich=turkey; expires=Fri, 31 Dec 2024 23:59:59 GMT';
```

*Works back to at least IE6.*

For more complex cookie work, I wrote [a small helper library that makes working with cookies easier](https://github.com/cferdinandi/jar).

### `localStorage`

Use the local storage API to store data locally that the browser can access later. Data is stored indefinitely, and must be a string.

```javascript
// Store data
var someData = 'The data that I want to store for later.';
localStorage.setItem('myDataKey', someData);

// Get data
var data = localStorage.getItem('myDataKey');

// Remove data
localStorage.removeItem('myDatakey');
```

*Works back to IE8.*

For more complex `localStorage` management, I wrote [a small helper library](https://github.com/cferdinandi/bin).

### `sessionStorage`

Works just like `localStorage`, except the data is cleared when the browser session ends.

```javascript
// Store data
var someTempData = 'The data that I want to store temporarily.';
sessionStorage.setItem('myTempDataKey', someTempData);

// Get data
var tempData = sessionStorage.getItem('myTempDataKey');

// Remove data
sessionStorage.removeItem('myTempDatakey');
```

*Works back to IE8.*

For more complex `sessionStorage` management, I wrote [a small helper library](https://github.com/cferdinandi/bin).



## JSON

### `JSON.stringify()`

Converts objects and arrays into strings.

```js
// A lunch order
var lunch = {
	sandwich: 'turkey',
	chips: 'Cape Cod',
	drink: 'Pepsi'
};

// Save data to local storage
localStorage.setItem('lunchOrder', JSON.stringify(lunch));

// Drink options
var drinks = ['Pepsi', 'water', 'lemonade'];

// Save data to local storage
localStorage.setItem('drinkOptions', JSON.stringify(drinks));
```

*Works back to IE8.*

### `JSON.parse()`

Converts stringified JSON back into an object or array.

```javascript
// Get data from local storage
var savedLunch = JSON.parse(localStorage.getItem('lunchOrder'));
var savedDrinks = JSON.parse(localStorage.getItem('drinkOptions'));
```

*Works back to IE8.*



## Ajax & APIs

### `XMLHttpRequest()` (XHR)

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
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();
```

*Works back to IE7.*

XHR is verbose and a bit clunky to work with. I maintain [Atomic, a promise-based Ajax/XHR helper library](https://github.com/cferdinandi/atomic).