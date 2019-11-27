function draw() {
    let canvas = document.getElementById("logo");
    if(canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.translate(1, 0);
        ctx.beginPath();
        // ctx.lineTo(100, 250);

        // ctx.arcTo(300, 200, 200, 150, 50);
        ctx.arc(300, 250, 10, 0, Math.PI * 2, true);
        ctx.bezierCurveTo(50, 100, 300, 10, 10, 20);
        // ctx.arc(300, 150, 100, 0, 3 * Math.PI / 2, true);
        // ctx.closePath();
        ctx.stroke();
        // requestAnimationFrame(draw);
    }
}

/**
 * lineTo(x, y)
 * arc(x, y, radius, startAngle, endAngle, anticlockwise)
 */