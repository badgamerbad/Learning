require(`./index.html`);
require(`./index.css`);

class foo {
    constructor() {
        this.mouseCoordinates = {
            x: 0,
            y: 0,
        };
        this.init();
    }
    init() {
        let body = document.getElementsByTagName(`body`);
        let link = `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent`;
    }
}
new foo();