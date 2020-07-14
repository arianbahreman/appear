type AppearanceEvents = {
  [key: string]: Function
}

export default function appearanceObserver()
{
  /*
    Event Listener
  */
  var events: AppearanceEvents = {};

  const on = (event: string, handler: Function) => {
    events[event] = handler;
  }

  /*
    Default Options
  */
  const options = {
    threshold: 0.0000001
  }

  const observer = new IntersectionObserver(entries => {
    /*
      Frame Dimensions
    */
    const frame = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    /*
      Intersection Entries
    */
    entries.forEach(entry => {

      const item = entry.target;
      const bounding   = item.getBoundingClientRect();
      const appearOnce = item.getAttribute('data-appear-once') === '';
      const isVisible  = item.getAttribute('data-appear-init') === '1';

      if ((bounding.x + bounding.width > 0  && bounding.x < frame.width)
      &&  (bounding.y + bounding.height > 0 && bounding.y < frame.height))
      {
        if (! (isVisible && appearOnce))
        {
          item.setAttribute('data-appear-init', '1');
          item.classList.add('appear');

          /*
            Appear Event
          */
          events.appear && events.appear(item);

          /*
            Custom Event
          */
          const event = item.getAttribute('data-appear-event');
          event && events[event] && events[event](item);
        }
      }
      else
      {
        if (isVisible && ! appearOnce)
        {
          item.setAttribute('data-appear-init', '0');
          item.classList.remove('appear');
        }
      }
    });
  }
  /*
    Observer Option
  */
  , options);

  /*
    Observe Item
  */
  const addItem = (item: Element) =>
  {
    item.setAttribute('data-appear-init', '0');
    observer.observe(item);
  }

  document.querySelectorAll('[data-appear]').forEach(item => addItem(item));

  return { addItem, on };
}
