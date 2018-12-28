const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

var molecule = {
    x: 100,
    y: 100,
    radius: 10,
    color: '#808080',
    draw: function() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true)
        ctx.closePath()
        ctx.fillStyle = this.color
        ctx.strokeStyle = 'black'
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
    var diameter = 2 * molecule.radius
    if( (x > molecule.x && x < molecule.x + molecule.radius) && (y > molecule.y && y < molecule.y + molecule.radius) ) {
        // console.log(1)
        molecule.x += x - molecule.x
        molecule.y += y - molecule.y 
    }
    else if( (x > molecule.x && x < molecule.x + molecule.radius) && (y > molecule.y + molecule.radius && y < molecule.y + diameter) ) {
        // console.log(2)
        molecule.x += x - molecule.x
        molecule.y -= y - molecule.y
    }
    else if( (x > molecule.x + molecule.radius && x < molecule.x + diameter) && (y > molecule.y && y < molecule.y + molecule.radius) ) {
        // console.log(3)
        molecule.x -= x - molecule.x
        molecule.y += y - molecule.y 
    }
    else if( (x > molecule.x + molecule.radius && x < molecule.x + diameter) && (y > molecule.y + molecule.radius && y < molecule.y + diameter) ) {
        // console.log(4)
        molecule.x -= x - molecule.x
        molecule.y -= y - molecule.y
    }
    raf = window.requestAnimationFrame(move_molecule.bind(move_molecule, x, y))
}

document.addEventListener('mousemove', function(event){
    // console.log(`event.x : ${event.x} event.y: ${event.y}`)
    raf = window.requestAnimationFrame(move_molecule.bind(move_molecule, event.x, event.y))
})

molecule.draw()