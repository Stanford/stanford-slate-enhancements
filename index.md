---
title: Home
has_children: false
nav_order: 1
---

# Stanford Slate Enhancements

This library provides a set of JavaScript features that you can use in your Slate instance.

## Adding the Code
Add the library to the head area in build.xslt. Choose one of these urls to add. Replace `[version]` with the version number. It will look something like "v0.2". [Click here to view the releases and get the version number.](https://github.com/Stanford/stanford-slate-enhancements/releases) 

```
Uncompressed - https://cdn.jsdelivr.net/gh/Stanford/stanford-slate-enhancements@[version]/stanford-slate-enhancements.js
Compressed - https://cdn.jsdelivr.net/gh/Stanford/stanford-slate-enhancements@[version]/stanford-slate-enhancements.min.js
```

Then add this line to the JavaScript that is loaded into the head. This can either be done inside a file that may already exist or place this code below the line in the previous step.
```html
<script type="text/javascript">
  StanfordSlateEnhancements.init();
</script>
```

It should look something like this.
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Stanford/stanford-slate-enhancements@v0.2/stanford-slate-enhancements.min.js"></script>
<script type="text/javascript">
  StanfordSlateEnhancements.init();
</script>
```
