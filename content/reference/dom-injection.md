---
title: "DOM Injection"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
anchors: true
weight: 100
---

## `createElement()`

Create an element.

```javascript
var div = document.createElement('div');
var link = document.createElement('a');
var article = document.createElement('article');
```

*Works back to at least IE6.*



## `insertBefore()`

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



## `before()`

Insert an element before another one. Call the `before()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.querySelector('#some-element');

// Insert the new node before the reference node
referenceNode.before(newNode);
```

*Works in all modern browsers, including Edge, but not IE. [Use with a polyfill.](/polyfills/before/)*



## `after()`

Insert an element in the DOM after another one. Call the `after()` method on the reference node, and pass in the new node as an argument.

```javascript
// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.querySelector('#some-element');

// Insert the new node after the reference node
referenceNode.after(newNode);
```

*Works in all modern browsers, including Edge, but not IE. [Use with a polyfill.](/polyfills/after/)*



## `prepend()`

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

*Works in all modern browsers, including Edge, but not IE. [Use with a polyfill.](/polyfills/prepend/)*



## `append()`

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

*Works in all modern browsers, including Edge, but not IE. [Use with a polyfill.](/polyfills/append/)*



## `appendChild()`

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



## `removeChild()`

Remove an element from the DOM. This method is called against the target element's parent, which you can get with `parentNode`.

```javascript
var elem = document.querySelector('#some-element');
elem.parentNode.removeChild(elem);
```

*Works back to at least IE6.*



## `remove()`

Remove an element from the DOM. Call the `remove()` method on the element you want to remove.

```javascript
var elem = document.querySelector('#some-element');
elem.remove();
```

*Works in all modern browsers, including Edge, but not IE. [Use with a polyfill.](/polyfills/remove/)*