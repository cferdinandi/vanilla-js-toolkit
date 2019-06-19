---
title: "Autocomplete"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Create an autocompletion text input."
polyfills: "Works in Chrome, Firefox, and IE11 and up, but not Safari. Defaults to a standard input in unsupported browsers."
weight: 20
---

Create a label and input like you normally would. Then create a `datalist` element, and add an `option` element for each autocomplete choice.

Give the `datalist` an ID. Add the `list` property to your input with a value equal to your `datalist` ID.

```html
<label for="states">Who's the best wizard?</label>
<input type="text" id="wizards" name="wizards" list="wizards-list">
<datalist id="wizards-list">
	<option>Harry Potter</option>
	<option>Hermione</option>
	<option>Dumbledore</option>
	<option>Merlin</option>
	<option>Gandalf</option>
</datalist>
```

[Autocomplete Demo &rarr;](https://codepen.io/cferdinandi/pen/BMEVrx)