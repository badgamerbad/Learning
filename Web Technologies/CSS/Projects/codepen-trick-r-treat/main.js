require(`./index.html`);
require(`./index.css`);

class hungry_pumpkin {
    constructor() {
        this.init();
    }
    init() {
        let body = document.querySelector(`body`);
        let pumpkin = document.querySelector('.pumpkin');
        let message = document.querySelector(`.message`);
        body.addEventListener('click', (e) => {
            message.style.display = `none`;
            pumpkin.classList.remove('close-mouth');
            pumpkin.classList.add('open-mouth');
            let startX = pumpkin.offsetLeft, startY = pumpkin.offsetTop;
            let stopX = e.x - 40, stopY = e.y;
            let distanceX, distanceY;
            let stepX, stepY;
            let leapX, leapY;
            let speed;
            if(startX < stopX) {
                distanceX = stopX - startX;
                stepX = Math.round( distanceX / 25 );
                leapX = startX + stepX;
            }
            else {
                distanceX = startX - stopX;
                stepX = Math.round( distanceX / 25 );
                leapX = startX - stepX;
            }
            if(startY < stopY) {
                distanceY = stopY - startY;
                stepY = Math.round( distanceY / 25 );
                leapY = startY + stepY;
            }  
            else {
                distanceY = startY - stopY;
                stepY = Math.round( distanceY / 25 );
                leapY = startY - stepY;
            } 
            
            if(distanceX > distanceY) {
                speed = Math.round( distanceX / 100 );
                if( speed >= 20 ) speed = 20;
            }
            else {
                speed = Math.round( distanceY / 100 );
                if( speed >= 20 ) speed = 20;
            }
            
            console.log(`startX: ${startX}, startY: ${startY}`)
            console.log(`stopX: ${stopX}, stopY: ${stopY}`)
            console.log(`distanceX: ${distanceX}, distanceY: ${distanceY}`)
            console.log(`stepX: ${stepX}, stepY: ${stepY}`)
            console.log(`leapX: ${leapX}, leapY: ${leapY}`)

            let timer = 0
            let continue_while = true;
            while(continue_while){
                if(startX < stopX) {
                    leapX += stepX;
                    if(leapX > stopX)
                        leapX = stopX;
                }
                else {
                    leapX -= stepX;
                    if(leapX < stopX)
                        leapX = stopX;
                }
                if(startY < stopY) {
                    leapY += stepY;
                    if(leapY > stopY)
                        leapY = stopY;
                }  
                else {
                    leapY -= stepY;
                    if(leapY < stopY)
                        leapY = stopY;
                }

                setTimeout( `document.querySelector('.pumpkin').style.top = '${leapY}px'; document.querySelector('.pumpkin').style.left = '${leapX}px';`, timer * speed);
                timer++;

                if(leapX == stopX || leapY == stopY || ( stepX == 0 && stepY == 0)) {
                    continue_while = false;
                    setTimeout( `document.querySelector('.pumpkin').classList.add('close-mouth'); document.querySelector('.pumpkin').classList.remove('open-mouth')`, timer * speed);
                } 
            }
        });
    }
}
new hungry_pumpkin();