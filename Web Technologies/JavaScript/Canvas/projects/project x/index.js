function draw() {
    let canvas = document.getElementById("logo");
    if(canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.translate(5, 5);
        ctx.beginPath();
        ctx.arc(300, 300, 50, 3 * Math.PI / 2, Math.PI, false);
        ctx.arc(200, 200, 50, 0, Math.PI / 2, true);
        ctx.closePath();

        // showCoordinates(ctx);

        ctx.stroke();
        
        // requestAnimationFrame(draw);
    }
}

function showCoordinates(ctx) {
    ctx.moveTo(300, 300);
    ctx.strokeText(` 1 300, 300`, 300, 300);
    ctx.arc(300, 300, 1, 0, 2 * Math.PI);
    
    ctx.moveTo(200, 200);
    ctx.strokeText(` 2 200, 200`, 200, 200);
    ctx.arc(200, 200, 1, 0, 2 * Math.PI);

    ctx.moveTo(250, 250);
    ctx.strokeText(` 3 250, 250`, 250, 250);
    ctx.arc(250, 250, 1, 0, 2 * Math.PI);
}

/**
 * lineTo(x, y)
 * arc(x, y, radius, startAngle, endAngle, anticlockwise)
 */