/*
  @type AppearElementState
*/
type AppearElementState = 'pending' | 'appear' | 'disappear';

/*
  @interface AppearElement

  @param element: HTMLElement
  @param name:    string | null
  @param once:    boolean
  @param state:   AppearElementState

  Internal iterator maps NodeList and convert HTMLElements to AppearElement
*/
interface AppearElement {
  element: HTMLElement;
  name: string | null;
  once: boolean;
  state: AppearElementState
}

/*
  . . . . . . . . . . . . . . . . . . .
  .  .  .  .  .  .  .  .  .  .  .  .  .
  .  .  Appear
  .  .  .  .  .  .  .  .  .  .  .  .  .
  . . . . . . . . . . . . . . . . . . .
*/
namespace Appear {

  /*
    Package version
  */
  export const version: string = '1.0';

  let items: Array<AppearElement> = [];

  /*
    @method init

    @param list: null | NodeList | HTMLElement
    @return void
  */
  export const init = ():void =>
  {
    iterator(document.querySelectorAll('data-appear'));

    update();
  }

  /*
    @method iterator

    @param list: NodeList | HTMLElement
    @return void
  */
  const iterator = (nodes: NodeList | HTMLElement):void =>
  {
    if (nodes instanceof HTMLElement)
    {
      addElement(nodes as HTMLElement);
    }
    else
    {
      nodes.forEach(node =>
      {
        addElement(node as HTMLElement);
      });
    }
  }

  /*
    @method addElement

    @param node: HTMLElement
    @return void
  */
  const addElement = (node: HTMLElement):void =>
  {
    items.push(
    {
      element: node
    ,
      state: 'pending'
    ,
      name: node.getAttribute('data-appear-name')
    ,
      once: node.getAttribute('data-appear-once') !== 'false'
    });
  }

  /*
    @method update

    @return void
  */
  export const update = ():void =>
  {
    /*
      Frame Dimensions
    */
    const frame =
    {
      width: window.innerWidth
    ,
      height: window.innerHeight
    };

    items.forEach(item =>
    {
      const bounding = item.element.getBoundingClientRect();

      if ((bounding.x + bounding.width > 0 && bounding.x < frame.width)
      && (bounding.y + bounding.height > 0 && bounding.y < frame.height))
      {
        if (item.state !== 'appear' && ! item.once)
        {
          item.element.classList.add('appear');
          item.state = 'appear';
        }
      }
      else
      {
        if (! item.once)
        {
          item.element.classList.remove('appear');
          item.state = 'disappear';
        }
      }
    });
  }
}

export default Appear;
