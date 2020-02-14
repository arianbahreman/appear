# appear
Appear elements on entering into frame

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

import Appear from 'appear';

Appear.init();

window.addEventListener('scroll', () => 
{
  Appear.update();
});
```
