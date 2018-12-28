var rotating_rects = document.getElementById('rotating_rects')
var rotating_rects_ctx = rotating_rects.getContext('2d')

var rect = {
    i: 0,
    rect_count: 12,
    j: 0,
    fade_count: 100,
    fade_acceleration: 0.05,
    draw: function(){
        var sin = Math.sin(Math.PI / (this.rect_count/2) )
        var cos = Math.cos(Math.PI / (this.rect_count/2) )
        var c = 0
        c = Math.floor(255/this.rect_count * this.i)
        
        rotating_rects_ctx.fillStyle = 'rgb(' + c + ', ' + c + ', ' + c + ')'
        rotating_rects_ctx.fillRect(0, 0, 100, 10)
        rotating_rects_ctx.transform(cos, sin, -sin, cos, 0, 0)
    }
}

function draw_rotating_rects(){
    rect.draw()
    rect.i += 1;
    if(rect.i == rect.rect_count){
        rotating_rects_ctx.translate(-100, -100)
        window.cancelAnimationFrame(raf)
        draw_rect_fade()
        rect.i = 0
    }
    else 
        raf = window.requestAnimationFrame(draw_rotating_rects)
}

function draw_rect_fade(){
    rotating_rects_ctx.fillStyle = `rgb(255, 255, 255, ${rect.fade_acceleration})`
    rotating_rects_ctx.fillRect(0, 0, rotating_rects.clientWidth, rotating_rects.height)
    rect.j += 1
    if(rect.j == rect.fade_count){
        window.cancelAnimationFrame(raf)
        rotating_rects_ctx.translate(100, 100)
        draw_rotating_rects()
        rect.j = 0
    }
    else{
        raf = window.requestAnimationFrame(draw_rect_fade)
    }
}

rotating_rects.addEventListener(`mouseover`, function(e) {
    rotating_rects_ctx.translate(100, 100)
    raf = window.requestAnimationFrame(draw_rotating_rects)
})
rotating_rects.addEventListener(`mouseout`, function(e) {
    window.cancelAnimationFrame(raf)
})