---
title: Classify
parent: Features
---

# Classify (classify)
Slate doesn't provide a lot of css classes to theme with. This adds classes on the body tag and other locations that can be used in css styles as well as references for custom JavaScript.

## How to Configure
No configuration required.

## Classes Added

### \<body\> tag
* application = Currently on an application page.
* path-* = The current path you are on. or example if you are on the url /apply/tes there will be a class "path-apply-tes".
* logged-in = The user is currently logged into the site.
* not-logged-in = The user is not currently logged into the site.
* slate-form = Currently on a form (not within the application).

### Application List Table
For the table that lists the applications on /apply there is an application-list class added to the \<table\> tag.

### Login/Create Account Links
When the user is not logged in there are the Login and Create Account links on the /apply page. 
* An "authentication-table" class is added to the \<table\> tag encompassing those links. 
* A "create-an-account" class on the \<td\> tag around the Create an Account link.
* A "log-in-wrapper" class on the \<td\> tag around the Create an Account link.