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
        let body = document.querySelector(`body`);
        let candy = document.querySelector('.candy');
        body.addEventListener('mousemove', (e) => {
            var foo = {}
            // console.log(`x: ${e.x}, y: ${e.y}`)
        });
    }
}
new foo();