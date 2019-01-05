"use strict"
{
    class Canvas {
        constructor() {
            this.elem = document.querySelector('canvas')
            this.elem.width = this.elem.offsetWidth
            this.elem.height = this.elem.offsetHeight
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
            const dx = pointer.x - this.x
			const dy = pointer.y - this.y
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
				this.x = pointer.ease_x + this.dx
				this.y = pointer.ease_y + this.dy
			}
			this.limit()
			const x = this.x;
			const y = this.y;
			this.x += this.x - this.px
			this.y += this.y - this.py + 2 * kGravity;
			this.px = x;
			this.py = y;
			ctx.beginPath()
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
            ctx.strokeText(`${this.x} ${this.y}`, this.x, this.y - 3) 
            ctx.strokeText(`${this.px} ${this.py}`, this.x, this.y + 8)
			ctx.strokeStyle = "#333"
			ctx.stroke()
        }
        limit() {
            if(gravity.value) {
                if(this.y + this.y - this.py > canvas.height) {
                    this.y -= this.y - this.py
                }
                if(this.y < 0) {
                    this.y = 0
                }
                if(this.x + this.x - this.px > canvas.width) {
                    this.x -= this.x - this.px
                }
                if(this.x < 0) {
                    this.x = 0
                }
            }
            else {
                if(this.y + this.y - this.py > canvas.height || this.y < 0) {
                    [this.y, this.py] = [this.py, this.y]
                }
                if(this.x + this.x - this.px > canvas.width || this.x < 0) {
                    [this.x, this.px] = [this.px, this.x]
                }
            }
		}
    }
    class Pointer {
        constructor() {
            this.x = this.ease_x = 0;
			this.y = this.ease_y = 0;
            this.isMouseDown = false
            canvas.addEventListener('mousedown', e => this.mouseDown(e, false))
            canvas.addEventListener('mousemove', e => this.mouseMove(e, false))
            canvas.addEventListener('mouseup', e => this.mouseUp(e, false))
            canvas.addEventListener('touchstart', e => this.mouseDown(e, true))
            canvas.addEventListener('touchmove', e => this.mouseMove(e, true))
            canvas.addEventListener('touchend', e => this.mouseUp(e, true))
        }
        mouseDown(event, touch) {
            this.isMouseDown = true
            this.mouseMove(event, touch);
            if (touch) sun.anim();
			if (sun.over) {
                sun.drag = true;
                this.ease_x = this.x;
				this.ease_y = this.y;
				sun.dx = sun.x - this.ease_x;
				sun.dy = sun.y - this.ease_y;
			}
        }
        mouseMove(event, touch) {
            if(touch){
                this.x = event.targetTouches[0].clientX
                this.y = event.targetTouches[0].clientY;
            }
            else {
                this.x = event.clientX
                this.y = event.clientY
            }
        }
        mouseUp(event, touch) {
            this.isMouseDown = false
            sun.drag = false
			sun.over = false
        }
        anim() {
            ctx.beginPath()
            ctx.strokeStyle = "#333"
            ctx.arc(this.x, this.y, 10, 0, 2*Math.PI)
            ctx.strokeText(`${this.x  } ${this.y}`, this.x + 15, this.y - 2)
            ctx.strokeText(`${this.ease_x} ${this.ease_y}`, this.x + 15, this.y + 8)
            ctx.stroke()
            if(sun.over) 
                ctx.fillStyle = "#333"
                ctx.fill()
            if(sun.drag) 
                ctx.fillStyle = "#888"
                ctx.fill()
        }
        ease(n) {
			this.ease_x += (this.x - this.ease_x) * n;
			this.ease_y += (this.y - this.ease_y) * n;
		}
    }
    class Gravity {
        constructor() {
            const gravityButton = document.querySelector('.gravityButton')
            this.value = false
            gravityButton.addEventListener('click', e => {
                this.value = !this.value
                gravityButton.innerHTML = `Gravity: ${this.value}`
            })
        }
    }
    const kGravity = 0.04
    const canvas = new Canvas()
    const ctx = canvas.getContext('2d')
    const sun = new Sun(100, 100, 50)
    const pointer = new Pointer()
    const gravity = new Gravity()
    const run = () => {
        requestAnimationFrame(run)
        ctx.fillStyle = "#bebebf"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        pointer.ease(0.25);
        sun.anim()
        pointer.anim()
    }
    run()
}