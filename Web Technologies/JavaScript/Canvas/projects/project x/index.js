function draw() {
    let canvas = document.getElementById("logo");
    if(canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.translate(5, 5);
        ctx.beginPath();
        ctx.arc(200, 350, 50, 3 * Math.PI / 2, Math.PI, false);
        ctx.arc(100, 250, 50, 0, Math.PI / 2, true);
        ctx.closePath();

        ctx.moveTo(200, 350);
        ctx.strokeText(` 1 200, 350`, 200, 350);
        ctx.arc(200, 350, 1, 0, 2 * Math.PI);
        
        ctx.moveTo(100, 250);
        ctx.strokeText(` 2 100, 250`, 100, 250);
        ctx.arc(100, 250, 1, 0, 2 * Math.PI);

        ctx.stroke();
        
        // requestAnimationFrame(draw);
    }
}

/**
 * lineTo(x, y)
 * arc(x, y, radius, startAngle, endAngle, anticlockwise)
 */