---
title: Dialog
parent: Features
---

# Dialog (dialog)
Dialog allows a user to click on a link and it will show a dialog window with specified text.

![dialog](docs/images/dialog.gif?raw=true)

## How to Configure
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