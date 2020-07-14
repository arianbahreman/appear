# Appear
Appear DOM elements when they are visible in window bounds.
** Note: This package use IntersectionObserver. check for compatibility. **

## Install
```
$ npm i ab-appear
```

## Usage

HTML

```html
<ul>
  <li data-appear data-appear-once>Item 01</li>
  <li data-appear data-appear-once>Item 02</li>
  <li data-appear data-appear-once>Item 03</li>
  <li data-appear data-appear-once>Item 04</li>
  <li data-appear data-appear-once data-appear-event="custom-event">Item 05</li>
</ul>
```

Javascript

```js

import appearanceObserver from 'ab-appear';

/*
  Will automatically observe current DOM elements which has data-appear attribute
*/
const appear = appearanceObserver();

/*
  Observe new element
*/
appear.addItem(newElement);

/*
  Triggler custom event on appear
*/
appear.on('custom-event', function(target) {
  console.log(target);
});