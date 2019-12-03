const canvas = document.getElementById("logo");
const ctx = canvas.getContext('2d');
function init() {
    if(canvas.getContext) {
        ctx.beginPath();
        ctx.arc(200, 200, 50, 0, Math.PI / 2, true);
        ctx.arc(300, 300, 50, 3 * Math.PI / 2, Math.PI, false);
        ctx.closePath();

        // showCoordinates(ctx);

        draw();

        ctx.stroke();

        
    }
}

function draw() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.translate(1, 1);
    requestAnimationFrame(draw);
}

function showCoordinates(ctx) {
    ctx.moveTo(200, 200);
    ctx.strokeText(` 1 200, 200`, 200, 200);
    ctx.arc(200, 200, 1, 0, 2 * Math.PI);

    ctx.moveTo(300, 300);
    ctx.strokeText(` 2 300, 300`, 300, 300);
    ctx.arc(300, 300, 1, 0, 2 * Math.PI);

    ctx.moveTo(250, 250);
    ctx.strokeText(` 3 250, 250`, 250, 250);
    ctx.arc(250, 250, 1, 0, 2 * Math.PI);
}

/**
 * lineTo(x, y)
 * arc(x, y, radius, startAngle, endAngle, anticlockwise)
 */