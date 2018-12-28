function draw() {
    var canvas = document.getElementById('canvas')
    if(canvas.getContext) {
        var ctx = canvas.getContext('2d')
        
        ctx.font = '48px sans-serif'
        ctx.fillText('hello world', 10, 50)

        ctx.strokeText('hello world', 10, 100)
    }
}