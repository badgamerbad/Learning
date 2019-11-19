function draw() {
    let canvas = document.getElementById("logo");
    if(canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.translate(1, 0);
        ctx.beginPath();
        ctx.lineTo(100, 250);
        ctx.lineTo(300, 250);
        ctx.arc(400, 250, 50, 10, 60, true);
        // ctx.closePath();
        ctx.stroke();
        // requestAnimationFrame(draw);
    }
}

/**
 * lineTo(x, y)
 * arc(x, y, radius, startAngle, endAngle, anticlockwise)
 */