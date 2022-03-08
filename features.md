---
title: Features
has_children: true
nav_order: 2
---

This section lists all the features someone may want to use on the site. By default the library loads all of the features. Some sites may not want to have all the features running on it. There is the ability to pass an array of only the features that should be loaded. The value to pass can be found in the page title for the feature surrounded by ().

Example: 

```javascript
StanfordSlateEnhancements.init(["showHide", "dialog"]);
```