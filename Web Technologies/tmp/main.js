const config = require(`./config.json`);
if(config.enableDevMode){
    require(`./index.html`);
    require(`./index.css`);
}
class SlideShow {
    constructor(){
        this.imageNumber = 2;
    }
    interval() {
        setInterval( () => {
            let slideImagesElement = document.getElementsByClassName(`slide-image`);
            let slideImagesArrayLength = slideImagesElement.length;

            let moved = document.getElementsByClassName(`move-to-center`);
            moved[0].classList.add(`move-to-out`);
            moved[0].style.WebkitAnimationDuration = `${config.slideTime/2.5}ms`;
            moved[0].style.animationDuration = `${config.slideTime/2.5}ms`;
            moved[0].classList.remove(`move-to-center`);

            let imageElement = document.getElementsByClassName(`image-${this.imageNumber}`);
            imageElement[0].classList.add(`move-to-center`);
            imageElement[0].style.WebkitAnimationDuration = `${config.slideTime}ms`;
            imageElement[0].style.animationDuration = `${config.slideTime}ms`;
            imageElement[0].classList.remove(`move-to-out`);

            this.imageNumber++;
            if(this.imageNumber > slideImagesArrayLength)
                this.imageNumber = 1;
        }, config.slideTime );
    }
}

let slideShowInstance = new SlideShow();
slideShowInstance.interval();