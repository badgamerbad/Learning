"use strict"
{
    class Canvas {
        constructor() {
            this.elem = document.querySelector('canvas')
            this.elem.width = 1000
            this.elem.height = 600
            return this.elem
        }
    }
    class Sun {
        constructor(x, y, r) {
            this.x = x;
			this.y = y;
			this.px = x;
			this.py = y;
			this.dx = 0;
			this.dy = 0;
			this.r = r;
			this.drag = false;
			this.over = false;
        }
        anim() {
            const dx = pointer.x - this.x;
			const dy = pointer.y - this.y;
			if (Math.sqrt(dx * dx + dy * dy) < this.r) {
				if (!this.over) {
					this.over = true
				}
			} else {
				if (this.over && !this.drag) {
					this.over = false
				}
			}
			if (this.drag) {
				this.x = pointer.ex + this.dx;
				this.y = pointer.ey + this.dy;
			}
			this.limit(this);
			const x = this.x;
			const y = this.y;
			this.x += this.x - this.px;
			this.y += this.y - this.py + 2 * kGravity;
			this.px = x;
			this.py = y;
			ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            ctx.strokeText(`${this.x | 0} ${this.y | 0}`, this.x, this.y)
			ctx.strokeStyle = "#333";
			ctx.stroke();
        }
        limit(sun) {
			if(sun.y + 1 > canvas.height - 100 ) {
                sun.y -= 1
            }
            if(sun.x + 1 > canvas.width - 100 ) {
                sun.x -= 1
            }
            if(sun.y < 100) {
                sun.y += 1
            }
            if(sun.x < 100) {
                sun.x += 1
            }
		}
    }
    class Pointer {
        constructor() {
            this.x = this.ex = 0
			this.y = this.ey = 0
            this.isMouseDown = false
            canvas.addEventListener('mousedown', e => this.mouseDown(e, false))
            canvas.addEventListener('mousemove', e => this.mouseMove(e, false))
            canvas.addEventListener('mouseup', e => this.mouseUp(e, false))
        }
        mouseDown(event, touch) {
            this.isMouseDown = true
            this.mouseMove(event, touch);
            if (touch) sun.anim();
			if (sun.over) {
				sun.drag = true;
				this.ex = this.x;
				this.ey = this.y;
				sun.dx = sun.x - this.ex;
				sun.dy = sun.y - this.ey;
			}
        }
        mouseMove(event, touch) {
            this.x = event.clientX
            this.y = event.clientY
        }
        mouseUp(event, touch) {
            this.isMouseDown = false
            sun.drag = false
			sun.over = false
        }
        ease(n) {
			this.ex += (this.x - this.ex) * n;
			this.ey += (this.y - this.ey) * n;
		}
        anim() {
            ctx.beginPath()
            ctx.strokeStyle = "#333"
            ctx.arc(this.x, this.y, 10, 0, 2*Math.PI)
            ctx.strokeText(`${this.x | 0} ${this.y | 0}`, this.x + 15, this.y - 2)
            ctx.strokeText(`${this.ex | 0} ${this.ey | 0}`, this.x + 15, this.y + 7)
            ctx.stroke()
            if(sun.over) 
                ctx.fillStyle = "#333"
                ctx.fill()
            if(sun.drag) 
                ctx.fillStyle = "#888"
                ctx.fill()
        }
    }
    const kGravity = 0.04
    const canvas = new Canvas()
    const ctx = canvas.getContext('2d')
    const sun = new Sun(100, 100, 50)
    const pointer = new Pointer()
    const run = () => {
        requestAnimationFrame(run)
        ctx.fillStyle = "#bebebf";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        pointer.ease(0.1)
        sun.anim()
        pointer.anim()
    }
    run()
}