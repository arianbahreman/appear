export default function appearanceObserver(): {
    addItem: (item: Element) => void;
    on: (event: string, handler: Function) => void;
};
