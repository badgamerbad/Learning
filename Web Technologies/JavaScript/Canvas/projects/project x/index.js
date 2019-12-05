
class Logo {
    constructor (logoValues, ctx) {
        this.vx1 = logoValues.vx1;
        this.vy1 = logoValues.vy1;
        this.x1 = logoValues.x1;
        this.y1 = logoValues.y1;
        this.r1 = logoValues.r1;
        this.startAngle1 = logoValues.startAngle1;
        this.endAngle1 = logoValues.endAngle1;
        this.antiClockwise1 = logoValues.antiClockwise1;
        this.vx2 = logoValues.vx2;
        this.vy2 = logoValues.vy2;
        this.x2 = logoValues.x2;
        this.y2 = logoValues.y2;
        this.r2 = logoValues.r2;
        this.startAngle2 = logoValues.startAngle2;
        this.endAngle2 = logoValues.endAngle2;
        this.antiClockwise2 = logoValues.antiClockwise2;

        this.ctx = ctx;
    }
    drawShape = () => {
        this.ctx.beginPath();
        this.ctx.arc(this.x1, this.y1, this.r1, this.startAngle1, this.endAngle1, this.antiClockwise1);
        this.ctx.arc(this.x2, this.y2, this.r2, this.startAngle2, this.endAngle2, this.antiClockwise2);
        this.ctx.closePath();

        // show point on the canvas
        // this.showCoordinates();

        this.ctx.stroke();
    }
    showCoordinates = () => {
        this.ctx.moveTo(this.x1, this.y1);
        this.ctx.strokeText(` 1 ${this.x1}, ${this.y1}`, this.x1, this.y1);
        this.ctx.arc(this.x1, this.y1, 1, 0, 2 * Math.PI);

        this.ctx.moveTo(this.x2, this.y2);
        this.ctx.strokeText(` 2 ${this.x2}, ${this.y2}`, this.x2, this.y2);
        this.ctx.arc(this.x2, this.y2, 1, 0, 2 * Math.PI);

        this.ctx.moveTo((this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);
        this.ctx.strokeText(` 3 ${(this.x1 + this.x2) / 2}, ${(this.y1 + this.y2) / 2}`, (this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);
        this.ctx.arc((this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2, 1, 0, 2 * Math.PI);
    }
}

let canvas = document.getElementById("logo");
let _ctx = canvas.getContext("2d");

class LogoMesh {
    constructor(number) {
        this.node = [];
        for (let i = 0; i < number; ++i) {
            let initialLogoValues = {
                vx1: i / 5,
                vy1: i / 5,
                x1: 240,
                y1: 240,
                r1: 10,
                startAngle1: 0,
                endAngle1: Math.PI / 2,
                antiClockwise1: true,
                vx2: i / 5,
                vy2: i / 5,
                x2: 260,
                y2: 260,
                r2: 10,
                startAngle2: 3 * Math.PI / 2,
                endAngle2: Math.PI,
                antiClockwise2: false,
            }
            let logo = new Logo(initialLogoValues, _ctx);
            this.node.push(logo);
        }
    }
}

// init the number of logo threads
let logoMesh = new LogoMesh(5);

let fissionLogoMesh = true;
function draw() {
    _ctx.clearRect(0, 0, canvas.width, canvas.height);

    // fetch the individual logo node from logo mesh array
    for (let node of logoMesh.node) {
        if(node.vx1 != 0) {
            if(fissionLogoMesh) {
                if(Math.round(node.r1) == 100)
                    fissionLogoMesh = false;
            }
            else {
                if(Math.round(node.r1) == 10)
                    fissionLogoMesh = true;
            }

            if(fissionLogoMesh) {
                node.r1 += node.vx1;
                node.x1 -= node.vx1;
                node.y1 -= node.vy1;

                node.r2 += node.vx2;
                node.x2 += node.vx2;
                node.y2 += node.vy2;
            }
            else {
                node.r1 -= node.vx1;
                node.x1 += node.vx1;
                node.y1 += node.vy1;

                node.r2 -= node.vx2;
                node.x2 -= node.vx2;
                node.y2 -= node.vy2;
            }
            
        }

        node.drawShape();
    }
    
    requestAnimationFrame(draw);
}
draw();