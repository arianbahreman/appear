# appear
Appear DOM elements when they are visible in window's frame.

## Usage

HTML

```html
<ul>
  <li data-appear data-appear-once>Item 01</li>
  <li data-appear data-appear-once>Item 02</li>
  <li data-appear data-appear-once>Item 03</li>
  <li data-appear data-appear-once>Item 04</li>
  <li data-appear data-appear-once>Item 05</li>
</ul>
```

Javascript

```js

import appearanceObserver from './path-to-appear/Appear.ts';

/*
  Will automatically observe current DOM elements which has data-appear attribute
*/
const appear = appearanceObserver();

/*
  Adding new element to observe
*/
appear.addItem(img);