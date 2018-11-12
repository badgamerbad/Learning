require(`./index.html`);
require(`./index.css`);

class foo {
    constructor() {
        this.currentElementOffset = {
            x: 0,
            y: 0,
        };
        this.init();
    }
    init() {
        let body = document.querySelector(`body`);
        let pumpkin = document.querySelector('.pumpkin');
        body.addEventListener('click', (e) => {
            let startX = pumpkin.offsetLeft, startY = pumpkin.offsetTop;
            let stopX = e.x - 40, stopY = e.y;
            let incrementX, incrementY;
            let distanceX, distanceY;
            let stepX, stepY;
            if(startX < stopX) {
                incrementX = true;
                distanceX = startX - stopX;
            }
            else {
                incrementX = false;
                distanceX = stopX - startX;
            }
   
            if(startY < stopY) {
                incrementY = true
            }  
            else {
                incrementY = false;
            } 
            let leapX, leapY;
            // console.log(`startX: ${startX}, startY: ${startY}`)
            // console.log(`stopX: ${stopX}, stopY: ${stopY}`)
            // let timer = 0
            // for(let i = 0; ; ){
            //     leapY += step;
            //     if (leapY > stopY)
            //         leapY = stopY;
            //     setTimeout( ()=> {
            //         pumpkin.style.left = `${leapX}px`;
            //         pumpkin.style.top = `${leapY}px`;
            //     }, timer);
            //     timer++;
            // }
        });
    }
    currentOffset(element) {
        this.currentElementOffset = {
            x: 0,
            y: 0,
        };
    }
}
new foo();