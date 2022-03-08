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

### Options
Some sites may not want to have all the features running on it.  There is the ability to pass an array of only the features that should be loaded. The allowed values can be found in the title of the each feature below surrounded by ().

```javascript
StanfordSlateEnhancements.init(["showHide", "dialog"]);
```

## Features
### Classify (classify)
Slate doesn't provide a lot of css classes to theme with. This adds classes on the body tag and other locations that can be used in css styles as well as references for custom JavaScript.

#### How to Configure
No configuration required.

### Dialog (dialog)
Dialog allows a user to click on a link and it will show a dialog window with specified text.

![dialog](docs/images/dialog.gif?raw=true)

#### How to Configure
1. To enable create a link to show the dialog. This can be anywhere on the page.

```html
<a data-sse-dialog="dialog-text" href="#">Click Here</a>
```

The value of `data-sse-dialog` should be the id of the div surrounding the dialog created below.

2. Add the dialog. This can be anywhere on the page as well.
```html
<div id="dialog-text">
  <div class="header">
    Title of the Dialog Window
  </div>

  <div class="content">
    <p>
      The text of the dialog window.
    </p>
  </div>
</div>
```

### Select Search (selectSearch)
Turns a select list to a searchable select list.

![selectSearch](docs/images/selectSearch.gif?raw=true)

#### How to Configure

1. Go to the select field to make searchable
2. Click Source

![selectSearch Label](docs/images/wysiwyg-source.png?raw=true)

3. Add a span tag with a class="sse-select-search". It can be empty.
```html
<span class="sse-select-search"></span>
```

### Show/Hide (showHide)
Shows or Hides a section of text when clicking on a link.

![showHide](docs/images/showhide.gif?raw=true)

#### How to Configure
1. Create a link to show/hide the text. This can be anywhere on the page.
```html
<a data-sse-showhide="showhide-text" href="#">Click Here</a>
```

The value of `data-sse-showhide` should be the id of the div surrounding the text created below.

2. Add the text. This can be anywhere on the page as well.
```html
<div id="showhide-text">
  <p>
    This is the text to show/hide
  </p>
</div>
```
