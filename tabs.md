---
title: Tabs
parent: Features
---

# Tabs (tabs)
Creates a tabbed interface that can be used in portals.

## How to Configure
1. Create a section for your tabs.

```html
<ul data-sse-tabs-content="tab-data">
  <li>
    <a class="active" data-sse-tabs-action="action1" href="#">Tab 1</a>
  </li>
  <li>
    <a data-sse-tabs-action="action2" href="#">Tab 2</a>
  </li>
  <li>
    <a data-sse-tabs-action="action3" href="#">Tab 3</a>
  </li>
</ul>
```

The value of `data-sse-tabs-content` should be the id of the div created below.

The value of `data-sse-tabs-action` should be the action value of the related method of the portal view you want to load.

Whichever tab has a class with the value of "active" will be initially loaded. 

2. Add a wrapper div and some javascript to the page where you want the portal view to load.

```html
<script type="text/javascript">
  StanfordSlateEnhancements.init(['tabs']);
</script>
<div id="tab-data">
</div>
```
