---
title: "import all"
date: 2018-01-14T21:38:44-05:00
draft: false
noTitle: false
fullWidth: false
description: "Import all modules from a file."
weight: 30
---

Instead of naming every function you want to import, you can alternatively import _everything_, and assign all of the imported items to a variable.

Instead of using object destructuring, `import *`, then, assign it to a variable using the `as` opertor. In our case, let's use an underscore (`_`), common with helper libraries.

```javascript
import * as _ from './helpers.js';

// Get the total
let total = _.add(num1, num2);
```