/*
  . . . . . . . . . . . . . . . . . . .
  .  .  .  .  .  .  .  .  .  .  .  .  .
  .  .  Appear
  .  .  .  .  .  .  .  .  .  .  .  .  .
  . . . . . . . . . . . . . . . . . . .
*/
var Appear;
(function (Appear) {
    /*
      Package version
    */
    Appear.version = '1.0';
    let items = [];
    /*
      @method init

      @param list: null | NodeList | HTMLElement
      @return void
    */
    Appear.init = () => {
        iterator(document.querySelectorAll('data-appear'));
        Appear.update();
    };
    /*
      @method iterator

      @param list: NodeList | HTMLElement
      @return void
    */
    const iterator = (nodes) => {
        if (nodes instanceof HTMLElement) {
            addElement(nodes);
        }
        else {
            nodes.forEach(node => {
                addElement(node);
            });
        }
    };
    /*
      @method addElement

      @param node: HTMLElement
      @return void
    */
    const addElement = (node) => {
        items.push({
            element: node,
            state: 'pending',
            name: node.getAttribute('data-appear-name'),
            once: node.getAttribute('data-appear-once') !== 'false'
        });
    };
    /*
      @method update

      @return void
    */
    Appear.update = () => {
        /*
          Frame Dimensions
        */
        const frame = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        items.forEach(item => {
            const bounding = item.element.getBoundingClientRect();
            if ((bounding.x + bounding.width > 0 && bounding.x < frame.width)
                && (bounding.y + bounding.height > 0 && bounding.y < frame.height)) {
                if (item.state !== 'appear' && !item.once) {
                    item.element.classList.add('appear');
                    item.state = 'appear';
                }
            }
            else {
                if (!item.once) {
                    item.element.classList.remove('appear');
                    item.state = 'disappear';
                }
            }
        });
    };
})(Appear || (Appear = {}));
export default Appear;
