---
title: "Optional Chaining"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Chain properties only if they're not `undefined` or `null`."
weight: 80
---

Optional chaining is a browser-native way to chain methods or properties, and conditionally continue down the chain only if the value is not `null` or `undefined`.

To use optional chaining, add a question mark (`?`) before the dot (`.`) in your chain.

```javascript
// returns "Abracadabra!"
let summonOptional = wizard?.spells?.summon?.phrase;

// returns undefined but does not throw an error
let teacupsOptional = wizard?.spells?.teacup?.phrase;
```
