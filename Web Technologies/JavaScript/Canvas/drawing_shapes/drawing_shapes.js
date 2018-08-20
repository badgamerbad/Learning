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
}