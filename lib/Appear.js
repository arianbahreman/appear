"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function appearanceObserver() {
    var events = {};
    var on = function (event, handler) {
        events[event] = handler;
    };
    var options = {
        threshold: 0.0000001
    };
    var observer = new IntersectionObserver(function (entries) {
        var frame = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        entries.forEach(function (entry) {
            var item = entry.target;
            var bounding = item.getBoundingClientRect();
            var appearOnce = item.getAttribute('data-appear-once') === '';
            var isVisible = item.getAttribute('data-appear-init') === '1';
            if ((bounding.x + bounding.width > 0 && bounding.x < frame.width)
                && (bounding.y + bounding.height > 0 && bounding.y < frame.height)) {
                if (!(isVisible && appearOnce)) {
                    item.setAttribute('data-appear-init', '1');
                    item.classList.add('appear');
                    events.appear && events.appear(item);
                    var event_1 = item.getAttribute('data-appear-event');
                    event_1 && events[event_1] && events[event_1](item);
                }
            }
            else {
                if (isVisible && !appearOnce) {
                    item.setAttribute('data-appear-init', '0');
                    item.classList.remove('appear');
                }
            }
        });
    }, options);
    var addItem = function (item) {
        item.setAttribute('data-appear-init', '0');
        observer.observe(item);
    };
    document.querySelectorAll('[data-appear]').forEach(function (item) { return addItem(item); });
    return { addItem: addItem, on: on };
}
exports.default = appearanceObserver;
