const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

var molecule = {
    x: 100,
    y: 100,
    radius: 10,
    color: '#808080',
    stroke: '#d4d4d4',
    draw: function() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true)
        ctx.closePath()
        ctx.fillStyle = this.color
        ctx.strokeStyle = this.stroke
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(this.x - this.radius, this.y)
        ctx.lineTo(this.x + this.radius, this.y)
        ctx.stroke()
        ctx.closePath()
        ctx.beginPath()
        ctx.moveTo(this.x, this.y - this.radius)
        ctx.lineTo(this.x , this.y + this.radius)
        ctx.stroke()
        ctx.closePath()
    }
}

var raf;
function move_molecule(x, y) {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    molecule.draw()
    molecule.x = x - molecule.radius
    molecule.y = y - molecule.radius
    // raf = window.requestAnimationFrame(move_molecule.bind(move_molecule, x, y))
}

document.addEventListener('mousemove', function(event){
    // window.cancelAnimationFrame(raf)
    // raf = window.requestAnimationFrame(move_molecule.bind(move_molecule, event.x, event.y))
    move_molecule(event.clientX, event.clientY)
})

molecule.draw()