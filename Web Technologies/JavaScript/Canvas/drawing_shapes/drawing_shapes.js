function draw() {
    var canvas_rect = document.getElementById('canvas_rect');
    if(canvas_rect.getContext){
        var ctx = canvas_rect.getContext('2d');
        
        //(x, y, width, height)
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
    var canvas_line = document.getElementById('canvas_line');
    if(canvas_line.getContext){
        var ctx = canvas_line.getContext('2d');
        
        ctx.beginPath();
        //x, y
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
    }
    var canvas_arc = document.getElementById('canvas_arc');
    if(canvas_arc.getContext){
        var ctx = canvas_arc.getContext('2d');
        
        ctx.beginPath();
        //(x, y, radius, startAngle, endAngle, anticlockwise)
        ctx.arc(75, 75, 50, 0, Math.PI *2, true);   //outer circle
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);  //Mouth (clockwise)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true);    //left eye
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true);   //right eye
        ctx.stroke();
    }
    var canvas_arcs = document.getElementById('canvas_arcs');
    if(canvas_arcs.getContext) {
        var ctx = canvas_arcs.getContext('2d');
        
        for (var i=0; i < 3; i++) {
            for (var j=0; j<3; j++) {
                ctx.beginPath();
                var x = 25 + j * 50; // x coordinate
                var y = 25 + i * 50; // y coordinate
                var radius = 20; // Arc radius
                var startAngle = 0; // Starting point on circle
                var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
                var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

                ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
                if(i>1) {
                    ctx.fill();
                }
                else {
                    ctx.stroke();
                }
            }
        }
    }
    var quadratic_curve = document.getElementById('quadratic_curve');
    if(quadratic_curve.getContext) {
        var ctx = quadratic_curve.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(30, 0);
        //px1, py1, x2, y2
        ctx.quadraticCurveTo(5, 50, 20, 150);
        ctx.moveTo(90, 0);
        //px1, py1, px2, py2, x2, y2
        ctx.bezierCurveTo(30, 40, 140, 100, 100, 150);
        ctx.stroke();
    }
    var rect = document.getElementById('rect');
    if(rect.getContext){
        var ctx = rect.getContext('2d');
        ctx.moveTo(20, 20);
        //x1, y1, x2, y2, radius
        ctx.arcTo(80, 80, 50, 150, 50);
        ctx.stroke();
    }
    var path2d = document.getElementById('path2d');
    if(path2d.getContext) {
        var ctx = path2d.getContext('2d');
        var rectangle = new Path2D();
        rectangle.rect(10, 10, 50, 50);

        var circle = new Path2D();
        circle.moveTo(125, 35);
        circle.arc(100, 35, 25, 0, 2*Math.PI);
        ctx.stroke(rectangle);
        ctx.fill(circle);
    }
}