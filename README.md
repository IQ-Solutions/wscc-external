# WSCC Interactive Pages
## General Information
This project consist of two pages:
* How the WSCC Model Informs HIV, STD, and Pregnancy Prevention (index.html or _**index**_)
* The Whole School, Whole Community, Whole Child (WSCC) Model (sub.html or _**sub**_)

Both the index and sub make use of a compiled JS class called WsccGraphic that controls the menus,
scrolling, and graphics. Each pages initializes the JS class in a similar fashion:
```javascript
  var target = window.location.hash,
    target = target.replace('#', '');

  window.onload = function () {
    var wsccg = new WsccGraphic('home-sections.json',target);
  }
```

The above code block does the following:
1. Captures hash urls and converts it to a string the graphic class can work with
1. Instantiates the graphic class and loads it after the page finishes loading
1. Tells the graphic class how the graphic class should function ('home-sections.json')
and what where it should scroll to in the page if need be. This portion will be 
explained later.

Both pages are built with plain HTML, within a shell of the current site, and the 
majority of the styling comes from the current site. Any references to CSS and 
images that reside on the server should be changed from absolute links 
(https://cdc.gov/path/to/file) to relative links (/path/to/file).

## JSON Files 
**home-sections.json** - This json file is used to control the activation of the graphic
sections on the index page.

**sections.json** - This JSON file is used to control the activation the graphic sections
on the sub page.

## Index Config
The index page instantiation code should reference the home-sections.json file in the
following fashion:
```javascript
  window.onload = function () {
    var wsccg = new WsccGraphic('/path/to/home-sections.json',target);
  }
```

## Sub Config
The sub page instantiation code should reference the sections.json file in the
following fashion:
```javascript
  window.onload = function () {
    var wsccg = new WsccGraphic('/path/to/sections.json',target);
  }
```

## Images and other Misc files
Although efforts were made to use existing CSS and images there are images and css files packaged.
The file paths are relative to the directory the index and sub folders are in and may need to be adjusted.

### SCSS
The `wscc.css` files is compiled from `scss/wscc.scss`. An internal gulp process was used to compile 
but any scss compiler pointed to the dist folder will work fine.