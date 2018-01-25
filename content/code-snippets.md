---
title: "Code Snippets"
date: 2018-01-24T11:48:20-05:00
draft: false
noTitle: false
noIndex: false
anchors: true
---

A quick reference for commonly used JavaScript methods and browser APIs.

Unless otherwise noted, these work in all modern browers, and IE9+. This can be extended back further with [polyfills](/polyfills).

{{<cta>}}

{{<toc>}}

## Selectors

### querySelectorAll()

Get all matching elements on a page. You can use any valid CSS selector.

```javascript
// Get all elements with the .bg-red class
var elemsRed = document.querySelectorAll('.bg-red');

// Get all elements with the [data-snack] attribute
var elemsSnacks = document.querySelectorAll('[data-snack]');
```

### querySelector()

Get the first matching element on a page.

```javascript
// The first div
var elem = document.querySelector('div');

// The first div with the .bg-red class
var elemRed = document.querySelector('.bg-red');

// The first div with a data attribute of snack equal to carrots
var elemCarrots = document.querySelector('[data-snack="carrots"]');
```

### getElementById()

Get an element by its ID.

```javascript
var elem = getElementById('some-selector');
```

**Works back to at least IE6.**

### getElementsByClassName()

Get all elements on a page that have a specific class or classes. Returns a live HTMLCollection of elements.

```javascript
// Get elements with a class
var elemsByClass = document.getElementsByClassName('some-class');

// Get elements that have multiple classes
var elemsWithMultipleClasses = document.getElementsByClassName('some-class another-class');
```

### getElementsByTagName()

Get all elements that have a specific tag name.

***Note:*** *This returns a live HTMLCollection of elements. If an element is added or removed from the DOM after you set your variable, the list is automatically updated to reflect the current DOM.*

```javascript
// Get all divs
var divs = document.getElementsByTagName('div');

// Get all links
var links = document.getElementsByTagName('a');
```

### matches()

Check if an element would be selected by a particular selector or set of selectors. Returns `true` if the element is a  match, and `false` when it's not. This function is analogous to jQuery's `.is()` method.

```javascript
var elem = document.querySelector('#some-elem');
if (elem.matches('.some-class')) {
	console.log('It matches!');
} else {
	console.log('Not a match... =(');
}
```

**[Use with a polyfill.](/polyfills/matches/)**

## Loops

### for

Use `for` to loop through array and node list items. You can skip to the next item in a loop using `continue`, or end the loop altogether with `break`.

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
```

**Works back to at least IE6.**

### for...in

A `for...in` loop is a modified version of a `for` loop that you can use to loop through objects.

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
```

**Works back to at least IE6.**

### Array.forEach()

Loop over arrays. Use `return` like you would use `continue` in a `for` loop. There is no way to `break`.

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
```

**Works natively in all modern browsers and IE9, but [a polyfill pushes support back to IE6](/polyfills/arrayforeach/).**

### NodeList.forEach()

Loop over NodeLists.

```javascript
var sandwiches = document.querySelectorAll('.sandwich');

sandwiches.forEach(function (sandwich, index) {
	console.log(index) // index
	console.log(sandwich) // value
});
```

**Browser support is spotty. [Use a polyfill to support all modern browsers and IE9+.](/polyfills/nodelistforeach/)**

### Object.keys(obj).forEach()

There is no native `Object.forEach()` method. The `Object.keys()` method returns an array of the keys in an object, and you can call the `Array.forEach()` method on that.

```javascript
var lunch = {
	sandwich: 'ham',
	snack: 'chips',
	drink: 'soda',
	desert: 'cookie',
	guests: 3,
	alcohol: false,
};

Object.keys(lunch).forEach(function (item) {
	console.log(item); // key
	console.log(lunch[item]); // value
});
```

**Works natively in all modern browsers and IE9, but [a polyfill pushes support back to IE6](/polyfills/objectkeys/).**

## Class Manipulation

### classList

The `classList` API works very similar to jQuery's class manipulation functions.

```javascript
var elem = document.querySelector('#some-elem');

// Add a class
elem.classList.add('some-class');

// Remove a class
elem.classList.remove('some-other-class');

// Toggle a class
// (Add the class if it's not already on the element, remove it if it is.)
elem.classList.toggle('toggle-me');

// Check if an element has a specfic class
if (elem.classList.contains('yet-another-class')) {
	// Do something...
}
```

**Works in all modern browsers and IE10+. [Push support back to IE with a polyfill.](/polyfills/classlist/)**

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

**Works back to at least IE6.**

## Styles

### Inline Styles

Get and set inline styles for an element. The Mozilla Developer Network provides [a comprehensive list of available attributes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference).

```javascript
var elem = document.querySelector('#some-elem');

// Get a style
// If this style is not set as an inline style directly on the element, it returns an empty string
var bgColor = elem.style.backgroundColor;

// Set a style
elem.style.backgroundColor = 'purple';
```

**Works back to at least IE6.**

### Computed Styles

Get the actual computed style of an element. This factors in browser default stylesheets as well as external styles you've specified.

```javascript
var elem = document.querySelector('#some-elem');
var bgColor = window.getComputedStyle(elem).backgroundColor;
```

## Attributes

```javascript
var elem = document.querySelector('#some-elem');

// Get the value of an attribute
var sandwich = elem.getAttribute('data-sandwich');

// Set an attribute value
elem.setAttribute('data-sandwich', 'turkey');

// Remove an attribute
elem.removeAttribute('data-sandwich');

// Check if an element has an attribute
if (elem.hasAttribute('data-sandwich')) {
	// do something...
}
```

**Works back to least least IE6.**

## Event Listeners

### addEventListener()

The Mozilla Developer Network has [a full list of available events](https://developer.mozilla.org/en-US/docs/Web/Events).

```javascript
var btn = document.querySelector('#click-me');
btn.addEventListener('click', function (event) {
	console.log(event); // The event details
	console.log(event.target); // The clicked element
}, false);
```

### Event Bubbling

Listen for *all* events on a page, and then check to see if the affected element has a matching selector. Force event bubbling on events that don't support it (like `focus`) by setting the last argument—`use capture`—to `true`.

```javascript
// Listen for clicks on the entire window
window.addEventListener('click', function (event) {

	// The clicked element
	var clicked = event.target;

	// If the clicked element has the `.click-me` class, it's a match!
	if (event.target.classList.contains('click-me')) {
		// Do something...
	}

}, false);

// Listen for all focus events in the document with `use capture`
document.addEventListener('focus', function (event) {
	// Run functions whenever an element in the document comes into focus
}, true);
```

### Multiple Events

Use a named function and passing that into your event listener to keep your code DRY. The `event` is automatically passed in as an argument.

```javascript
// Setup our function to run on various events
var someFunction = function (event) {
	// Do something...
};

// Add our event listeners
window.addEventListener('click', someFunction, false);
window.addEventListener('scroll', someFunction, false);
```

### Debouncing

Events like `scroll` and `resize` can [cause huge performance issues on certain browsers](https://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/). Debouncing forces an event listener to wait a certain period of time before firing again.

```js
// Setup a timer
var timeout;

// Listen for resize events
window.addEventListener('scroll', function (event) {

	console.log('no debounce');

	// If there's a timer, cancel it
	if (timeout) {
		window.cancelAnimationFrame(timeout);
	}

	// Setup the new requestAnimationFrame()
	timeout = window.requestAnimationFrame(function () {

		// Run our scroll functions
		console.log('debounced');

	});

}, false);
```

**Works in all modern browsers and IE10+. [Push support back to IE6 with a `requestAnimationFrame()` polyfill.](/polyfills/requestanimationframe/)**


## Strings

### trim()

Remove whitespace from the beginning and end of a string.

```javascript
var text = '  This sentence has some whitespace at the beginning and end of it.  ';
var trimmed = text.trim();
```

**Works natively in all modern browsers and IE9, but [a polyfill pushes support back to IE6](/polyfills/stringtrim/).**

### toLowerCase()

Transform all text in a string to lowercase.

```javascript
var text = 'This sentence has some MIXED CASE LeTTeRs in it.';
var lower = text.toLowerCase();
```

**Works back to least IE6.**

### toUpperCase()

Transform all text in a string to uppercase.

```javascript
var text = 'This sentence has some MIXED CASE LeTTeRs in it.';
var upper = text.toUpperCase();
```

**Works back to least IE6.**

### Title Case

Convert a string to title case with [the `toTitleCase()` helper method](/helpers/totitlecase/).

```javascript
var str = 'HeRe is a MIXED capitization StRiNg.';
var str = toTitleCase(str);
```

**Works back to least IE6.**

### parseInt()

Convert a string into an integer (a whole number). The second argument, `10`, is called the `radix`. This is the base number used in mathematical systems. For our use, it should always be `10`.

```javascript
var text = '42px';
var integer = parseInt(text, 10);
```

**Works back to least IE6.**

### parseFloat()

Convert a string into a point number (a number with decimal points).

```javascript
var text = '3.14someRandomStuff';
var pointNum = parseFloat(text);
```

**Works back to least IE6.**

### Number()

Convert a string to a number. Less safe than `parseInt()` and `parseFloat()`.

```javascript
// Convert strings
Number('123'); // returns 123
Number('12.3'); // returns 12.3
Number('3.14someRandomStuff'); // returns NaN

// Convert a date to a number
// Returns 819188640000
Number(new Date('December 17, 1995 03:24:00'));
```

### replace()

Replace a portion of text in a string with something else.

```javascript
var text = 'I love Cape Cod potato chips!';
var lays = text.replace( 'Cape Cod', 'Lays' );
var soda = text.replace( 'Cape Cod potato chips', 'soda' );
var extend = text.replace( 'Cape Cod', 'Cape Cod salt and vinegar' );
```

**Works back to least IE6.**

### String.indexOf()

Determine if a string contains a substring. It returns the index of where the substring starts in the string, or `-1` if the substring isn't found. It's case-sensitive.

```javascript
var str = 'I love Cape Cod potato chips.';
str.indexOf('Cape Cod'); // Returns 7
str.indexOf('Cape C'); // Returns 7
str.indexOf('cape cod'); // Returns -1
```

**Works back to least IE6.**

### String.startsWith()

Check if a string starts with a particular set of characters. The first argument is the characters. You can optionally pass in a second argument with the position in the string to start looking.

```javascript
var str = 'I love Cape Cod potato chips.';
str.startsWith('I love'); // Returns true
str.startsWith('Cape Cod'); // Returns false
str.startsWith('Cape Cod', 7); // Returns true
```

**Works in all modern browsers, but [requires a polyfill for IE support](/polyfills/stringstartswith/).**

### String.endsWith()

Check if a string ends with a set of characters.

```javascript
var str = 'I love Cape Cod potato chips.';
str.endsWith('chips.'); // Returns true
str.endsWith('Cape Cod'); // Returns false
```

**Works in all modern browsers, but [requires a polyfill for IE support](/polyfills/stringendswith/).**

### slice()

Get a portion of a string starting (and optionally ending) at a particular character. The first argument is where to start. Use `0` to include the first character. The second argument is where to end (and is optional). If either argument is a negative integer, it will start at the end of the string and work backwards.

```javascript
var text = 'Cape Cod potato chips';
var startAtFive = text.slice(5);
var startAndEnd = text.slice(5, 8);
var sliceFromTheEnd = text.slice(0, -6);
```

**Works back to at least IE6.**

### split()

Convert a string into an array by splitting it after a specific character (or characters). The first argument, the `delimiter`, the character or characters to split by. As an optional second argument, you can stop splitting your string after a certain number of delimiter matches have been found.

```javascript
var text = 'Soda, turkey sandwiches, potato chips, chocolate chip cookies';
var menu = text.split(', ');
var limitedMenu = text.split(', ', 2);
```

**Works back to at least IE6.**

## Arrays

### push()

Add items to an array.

```javascript
var sandwiches = ['turkey', 'tuna', 'blt'];
sandwiches.push('chicken', 'pb&j');
```

**Works back to at least IE6.**

### Merge Arrays

Use `Array.prototype.push.apply()` to merge two or more arrays together. Merges all subsequent arrays into the first.

```javascript
var sandwiches1 = ['turkey', 'tuna', 'blt'];
var sandwiches2 = ['chicken', 'pb&j'];
Array.prototype.push.apply(sandwiches1, sandwiches2);
```

**Works back to at least IE6.**

### Array.slice()

Copy items into a new array. The first argument is the array index to start at, and the second is the index to end on. Both are optional. If you omit the start index, it will start at the beginning. If you omit the end index, it will go to the end. The original array is not be modified.

```javascript
// Modify an existing array
var sandwiches = ['turkey', 'tuna', 'chicken salad', 'italian', 'blt', 'grilled cheese'];
var fewerSandwiches = sandwiches.slice(2);
var fewerSandwiches2 = sandwiches.slice(2, 4);

// Create a new copy of an array in its entirety
var sandwichesCopy = sandwiches.slice();
```

**Works back to at least IE6.**

### Array.every()

Test whether or not every item in an array meets a specific criteria. Pass in a callback function that should return a comparison to evaluate. The callback accepts three arguments: the current item in the loop's value, its index, and the array itself.

```javascript
// Returns true
[12, 25, 42, 99, 101].every(function (item) {
	return item > 10;
});

// Returns false
[1, 12, 25, 42, 99, 101].every(function (item) {
	return item > 10;
});
```

### Array.some()

Test whether or not at least one item in an array meets a specific criteria. Pass in a callback function that should return a comparison to evaluate. The callback accepts three arguments: the current item in the loop's value, its index, and the array itself.

```javascript
// Returns true
[12, 25, 42, 99, 101].some(function (item) {
	return item > 10;
});

// Returns true
[1, 12, 25, 42, 99, 101].some(function (item) {
	return item > 10;
});

// Returns false
[1, 1, 3, 7, 9, 10].some(function (item) {
	return item > 10;
});
```

### Array.filter()

Create a new array with only elements that pass a test you include as a callback function.

```javascript
// Get only numbers bigger than 10
var newArray = [1, 2, 7, 42, 99, 101].filter(function (item) {
	return item > 10;
});
```

## Objects

### Dot and bracket notation

Use the dot notation (`obj.something`) or bracket notation (`obj['something']`) to add key/value pairs to an object.

```javascript
var lunch = {
    sandwich: 'turkey',
    chips: 'cape cod',
    drink: 'soda'
};

// Add items to the object
lunch.alcohol = false;
lunch["dessert"] = 'cookies';
```

**Works back to at least IE6.**

### Merge two or more objects together

Requires [the `extend()` helper method](/helpers/extend/). For deep (or recursive) merges, pass in `true` as the first argument. Otherwise, just pass in your objects. You can also use it to create a clone of another object.

```javascript
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

var newObjectShallow = extend(object1, object2, object3);
var newObjectDeep = extend(true, object1, object2, object3);
var cloneObj = extend(object1);
```

**Works back to at least IE6.**

## Compare Arrays or Objects

Use [the `isEqual()` helper method](/helpers/isequal/) to compare two arrays or objects

```javascript
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
isEqual(arr1, arr2); // returns true

var arrObj1 = [1, 2, {
	a: 1,
	b: 2,
	c: 3
}, 4, 5];
var arrObj2 = [1, 2, {
	c: 3,
	b: 2,
	a: 1
}, 4, 5];
isEqual(arrObj1, arrObj2); // returns true

var arr1 = [1, 2, 3, 4, 5];
var arr3 = [5, 4, 3, 2, 1];
isEqual(arr1, arr3); // returns false
```

## DOM Ready

Use [the `ready()` helper method](/helpers/ready/) to run events after the DOM is ready.

**Note:** *If you're loading your scripts in the footer (which you generally should be for performance reasons), the `ready()` method isn't really needed. It's just a habit from the "load everything in the header" days.*

```js
ready(function() {
	// Do stuff...
});
```

## HTML

### innerHTML

Get and set HTML content in an element.

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

### textContent

Works just like `innerHTML`, but only gets the text of an element and omits the markup.

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

### createElement()

Create an element. You can manipulate an element created with `createElement()` like you would any other element in the DOM. Add classes, attributes, styles, and more.

```javascript
var div = document.createElement('div');
var link = document.createElement('a');
var article = document.createElement('article');

// Works for invalid elements, too
var chicken = document.createElement('chicken'); // <chicken></chicken>
var placeholder = document.createElement('_'); // <_></_>
```

**Works back to at least IE6.**

### insertBefore()

The original way to add elements to the DOM. Call it on the parent of the element you’re inserting your new element before (the `referenceNode`), and pass in both the new element and the reference node as arguments.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.getElementById('some-element');

// Insert the new node before the reference node
referenceNode.parentNode.insertBefore(newNode, referenceNode);

// Insert the new node AFTER the reference node with the .nextSibling property
referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
```

**Works back to at least IE6.**

### before()

Insert an element before another one. Call the `before()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.querySelector('#some-element');

// Insert the new node before the reference node
referenceNode.before(newNode);
```

**Browser support is spotty. [Use a polyfill to support all modern browsers and IE9+.](/polyfills/before/)**

### after()

Insert an element in the DOM after another one. Call the `after()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.querySelector('#some-element');

// Insert the new node after the reference node
referenceNode.after(newNode);
```

**Browser support is spotty. [Use a polyfill to support all modern browsers and IE9+.](/polyfills/after/)**

### prepend()

Insert an element at the beginning of a set elements inside a shared parent. Call the `prepend()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the parent node
var referenceNode = document.querySelector('#some-element');

// Insert the new node before the first element in the reference node
referenceNode.prepend(newNode);
```

**Browser support is spotty. [Use a polyfill to support all modern browsers and IE7+.](/polyfills/prepend/)**

### append()

Insert an element at the end of a set elements inside a shared parent. Call the `append()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.querySelector('#some-element');

// Insert the new node after the last element in the reference node
referenceNode.append(newNode);
```

**Browser support is spotty. [Use a polyfill to support all modern browsers and IE9+.](/polyfills/append/)**

### appendChild()

Insert an element at the end of a set of elements inside a shared parent. Call the `appendChild()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.querySelector('#some-element');

// Insert the new node after the last element in the parent node
referenceNode.appendChild(newNode);
```

**Works back to at least IE6. I would use this over `append()` every time.**

### removeChild()

Remove an element from the DOM. This method is called against our target element's parent, which you can get with `parentNode`.

```javascript
var elem = document.querySelector('#some-element');
elem.parentNode.removeChild(elem);
```

**Works back to at least IE6.**

### remove()

Remove an element from the DOM. Call the `remove()` method on the element you want to remove.

```javascript
var elem = document.querySelector('#some-element');
elem.remove();
```

**Browser support is spotty. [Use a polyfill to support all modern browsers and IE9+.](/polyfills/remove/)**

## Traversing the DOM

### parentNode

Get the parent of an element.

```javascript
var elem = document.querySelector('#some-elem');
var parent = elem.parentNode;

// String together to go several levels up
var levelUpParent = elem.parentNode.parentNode;
```

**Works back to at least IE6.**

### closest()

Use `closest()` to get the closest parent up the DOM tree that matches against a selector.

```javascript
var elem = document.querySelector('#some-elem');
var closestSandwich = elem.closest('[data-sandwich]');
```

**Browser support is spotty. [Use a polyfill to support all modern browsers and IE9+.](/polyfills/closest/)**

### Get all parent elements

Use [the `getParents()` helper method](/helpers/getparents/) to get an element's parent elements, optionally matching against a selector.

```javascript
var elem = document.querySelector('#some-elem');
var parents = getParents(elem.parentNode);
var parentsWithWrapper = getParents(elem.parentNode, '.wrapper');
```

### Get parent elements until a match is found

Use [the `getParentsUntil()` helper method](/helpers/getparentsuntil/) to get an element's parent elements until a matching parent is found, optionally filtering against a selector.

```javascript
var elem = document.querySelector('#some-element');
var parentsUntil = getParentsUntil(elem, '.some-class');
var parentsUntilByFilter = getParentsUntil(elem, '.some-class', '[data-something]');
var allParentsUntil = getParentsUntil(elem);
var allParentsExcludingElem = getParentsUntil(elem.parentNode);
```

### Searching inside an element

The `querySelector()` and `querySelectorAll()` APIs aren't limited to just running on the `document`. They can be run on any element to search only for elements inside of it.

```javascript
var elem = document.querySelector('#some-elem');

// Find the first element inside `#some-elem` that has a `[data-snack]` attribute
var snack = elem.querySelector('[data-snack]');

// Get all divs inside `#some-elem`
var divs = elem.querySelectorAll('div');
```

### children

While `querySelector()` and `querySelectorAll()` search through all levels within a nested DOM/HTML structure, you may want to just get immediate decedants of a particular element. Use `children` for this.

```javascript
var elem = document.querySelector('#some-elem');
var decendants = wrapper.children;
```

### Get sibling elements

Use [the `getSiblings()` helper method](/helpers/getsiblings/) to get all of an element's sibling elements.

```javascript
var elem = document.querySelector('#some-element');
var siblings = getSiblings(elem);
```

**Works back to at least IE6.**

## The Viewport

### Get the viewport height

Combine `window.innerHeight` and `document.documentElement.clientHeight` for maximum browser compatibility.

```javascript
var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
```

**Works back to at least IE6.**

### Get the viewport width

Combine `window.innerWidth` and `document.documentElement.clientWidth` for maximum browser compatibility.

```javascript
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
```

**Works back to at least IE6.**

### Check if an element is in the viewport or not

Use [the `isInViewport()` helper method](/helpers/isinviewport/) to check if an element is in the viewport or not.

```javascript
var elem = document.querySelector('#some-element');
isInViewport(elem); // Boolean: returns true/false
```

## Distances

### Get the currently scrolled distance from the top of the page

Use `pageYOffset` to get the distance the user has scrolled from the top of the page.

```javascript
var distance = window.pageYOffset;
```

### Get an element's distance from the top of the page

Use [the `getOffsetTop()` helper method](/helpers/getoffsettop/) to get an element's distance from the top of the document.

```javascript
var elem = document.querySelector('#some-element');
var distance = getOffsetTop(elem);
```

## Cookies

### Setting a cookie

You can use `document.cookie` to set a cookie. It's a string, using a `{KEY}={VALUE};` format. Optionally, you can pass in an expiration date as a timestamp using the `expires={VALUE}` format.

```javascript
// Set a cookie named sandwich, with a value of turkey
// Cookie expires on December 31, 2024 at 11:59 and 59 seconds PM
document.cookie = 'sandwich=turkey; expires=Fri, 31 Dec 2024 23:59:59 GMT';
```

**Works back to at least IE6.**

### Getting a cookie value

Use [the `getCookie()` helper method](/helpers/getcookie/) to get the value of a cookie.

```javascript
var cookieVal = getCookie('sandwich');
```

**Works back to at least IE6.**

### More complex cookies

If you're doing more complex work with cookies, I would strongly recommend [the simple cookie library provided by MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie/Simple_document.cookie_framework).

## The Web Storage API

### localStorage

Store data locally that the browser can access later. Stored indefinitely. Stored data must be a string.

```javascript
// Store data
var someData = 'The data that I want to store for later.';
localStorage.setItem('myDataKey', someData);

// Get data
var data = localStorage.getItem('myDataKey');

// Remove data
localStorage.removeItem('myDatakey');
```

**Works in all modern browsers, and IE8+.**

### sessionStorage

Session storage works just like `localStorage`, except the data is cleared when the browser session ends.

```javascript
// Store data
var someTempData = 'The data that I want to store temporarily.';
sessionStorage.setItem('myTempDataKey', someTempData);

// Get data
var tempData = sessionStorage.getItem('myTempDataKey');

// Remove data
sessionStorage.removeItem('myTempDatakey');
```

**Works in all modern browsers, and IE8+.**

### Storage Limits

[Browsers provide differing levels of storage space](https://www.html5rocks.com/en/tutorials/offline/quota-research/) for `localStorage` and `sessionStorage`, ranging from as little as 2mb up to unlimited.

For browsers with a maximum storage limit, this amount is a total allowable amount of data, not *just* a max for your specific site or web app. Accordingly, you should try to reduce the overall footprint of your data as much as possible.

### Storing arrays with localStorage()

Use the `toString()` method to convert the array to a string, and `split()` to convert it back to an array.

```javascript
var someArray = ['turkey', 'tuna', 'pb&j'];

// Save data
localStorage.setItem('sandwiches', someArray.toString());

// Get data
var data = localStorage.getItem('sandwiches').split(',');
```

**Works in all modern browsers, and IE8+.**

### Storing objects with localStorage()

Use `JSON.stringify()` to convert our object to a JSON string, and `JSON.parse` to convert it back.

```javascript
var lunch = {
    sandwich: 'turkey',
    chips: 'cape cod',
    drink: 'soda'
}

// Save data
localStorage.setItem('lunch', JSON.stringify(lunch));

// Get data
var data = JSON.parse(localStorage.getItem('lunch'));
```

**Works in all modern browsers, and IE8+.**

## Query Strings

### Get an individual query string value

Use [the `getQueryString()` helper method](/helpers/getquerystring/) to get the value of a query string key from a URL. Pass in the key to get the value of. You can optionally pass in a URL as a second argument. The function will use the window URL by default.

```javascript
// Sample URL: http://example.com?sandwich=turkey&snack=cookies
var sandwich = getQueryString('sandwich'); // returns 'turkey'
var snack = getQueryString('snack'); // returns 'cookies'
var dessert = getQueryString('dessert'); // returns null
var drink = getQueryString('drink', 'http://another-example.com?drink=soda'); // returns 'soda'
```

**Works back to at least IE6.**

### Get all query string parameters

Use [the `getParams()` helper method](/helpers/getparams/) to get all of a URL's query string key/value pairs as an object. Pass in the URL as an argument.

```javascript
// Get query strings from the current URL
var params = getParams(window.location.href);

// Get query strings from any string
var moreParams = getParams('http://example.com?q=sandwich&type=tuna&sauce=mayo&topping=tomato%20and%20lettuce');
```

**Works back to at least IE6.**

## Ajax/HTTP Requests

### XMLHttpRequest()

```javascript
// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process compeleted requests
xhr.onreadystatechange = function () {
	// Only run if the request is complete
	if ( xhr.readyState !== 4 ) return;

	// Process our return data
	if ( xhr.status === 200 ) {
		// What do when the request is successful
		console.log( xhr );
	} else {
		// What do when the request fails
		console.log('The request failed!');
	}

	// Code that should run regardless of the request status
	console.log('This always runs...');
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open( 'GET', 'https://jsonplaceholder.typicode.com/posts' );
xhr.send();
```

**Works in all modern browsers and IE7+.**

### JSONP

For security reasons, you cannot load JSON files that reside on a different server. JSONP is a way to get around this issue.

Use [the `getJSONP()` helper method](/helpers/getjsonp/) to setup your JSONP request. Pass in your URL as the first argument, and a global callback function as the second.

```js
// Callback function
var logAPI = function ( data ) {
	console.log( data );
}

getJSONP( 'http://jsfiddle.net/echo/jsonp/?text=something&par1=another&par2=one-more', 'logAPI' );
```

**Works back to at least IE6.**

### Getting HTML

You may want to use Ajax to asynchronously get HTML from another page and load it on the current one. To do this, you need to change the `responseType` of the `XMLHttpRequest()` from it's default (`text`) to `document`.

```javascript
var xhr = new XMLHttpRequest();

// Setup our listener to process compeleted requests
xhr.onreadystatechange = function () {
	// Do something...
};

// Create and send a GET request
xhr.open( 'GET', '/page-url' );
xhr.responseType = 'document'
xhr.send();
```

### An Ajax Library

The `XMLHttpRequest()` syntax is a bit verbose.

[Atomic](https://github.com/cferdinandi/atomic) is an insanely useful Ajax/HTTP micro-library originally created by [Todd Motto](https://toddmotto.com) and now managed by me. It weighs just 1.5kb minified, and makes working with Ajax/HTTP and JSONP absurdly easy.

{{<mailchimp intro>}}