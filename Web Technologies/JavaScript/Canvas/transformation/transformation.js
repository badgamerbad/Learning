var ctx = document.getElementById('canvas').getContext('2d')

function draw(){
    var count = 12
    var sin = Math.sin(Math.PI / (count/2) )
    var cos = Math.cos(Math.PI / (count/2) )

    ctx.translate(100, 100)

    var c = 0
    
    for (var i=0; i <= count; i++ ){
        c = Math.floor(255/count * i)
        ctx.fillStyle = 'rgb(' + c + ', ' + c + ', ' + c + ')'
        ctx.fillRect(0, 0, 100, 10)
        ctx.transform(cos, sin, -sin, cos, 0, 0)
    }
}