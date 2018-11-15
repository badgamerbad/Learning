function draw() {
    var colors = document.getElementById('colors');
    if(colors.getContext){
        var ctx = colors.getContext('2d');
        
        
        ctx.fillStyle = 'orange';
        ctx.fillRect(20, 20, 50, 50);

        ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.arc(0, 0, 50, 50, Math.PI * 2, true);
        ctx.stroke();
    }
    var line_types = document.getElementById(`line_types`);
    if(line_types.getContext) {
        var ctx = line_types.getContext(`2d`);
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round'; 
        ctx.beginPath();
        ctx.moveTo(10, 30);
        ctx.lineTo(40, 50);
        ctx.stroke();
        ctx.lineWidth = 5;
        ctx.lineCap = 'butt';
        ctx.beginPath();
        ctx.moveTo(80, 30);
        ctx.lineTo(50, 50);
        ctx.stroke();
    }
}