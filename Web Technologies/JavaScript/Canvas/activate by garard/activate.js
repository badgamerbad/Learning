"use strict";
{
	class Grid {
		constructor(maxParticlesPerCell) {
			this.max = maxParticlesPerCell;
		}
		initSize(width, height, size) {
			this.width = (2 + width / size) | 0;
			this.height = (2 + height / size) | 0;
			this.size = size;
			this.cells = new Array(this.width * this.height * this.max);
			this.cellsSize = new Uint8Array(this.width * this.height);
		}
		fill(particles) {
			for (let p of particles) {
				const index =
					((1 + p.y / this.size) | 0) * this.width + ((1 + p.x / this.size) | 0);
				if (this.cellsSize[index] < this.max) {
					const cellPos = this.cellsSize[index]++;
					this.cells[index * this.max + cellPos] = p;
				}
			}
		}
		update(particles) {
			for (let i = 0; i < this.width * this.height; ++i) {
				for (let j = 0; j < this.cellsSize[i]; ++j) {
					const p = this.cells[i * this.max + j];
					const index =
						((1 + p.y / this.size) | 0) * this.width + ((1 + p.x / this.size) | 0);
					if (index !== i && this.cellsSize[index] < this.max) {
						this.cells[index * this.max + this.cellsSize[index]++] = p;
						this.cells[i * this.max + j] = this.cells[
							i * this.max + --this.cellsSize[i]
						];
					}
				}
			}
		}
	}
	class Contact {
		constructor(n, q, vx, vy) {
			this.n = n;
			this.q = q;
			this.vx = vx;
			this.vy = vy;
		}
	}
	class Particle {
		constructor(x, y) {
			this.x = x;
			this.y = y;
			this.px = x;
			this.py = y;
		}
		turbine() {
			const dx = pointer.x - this.x;
			const dy = pointer.y - this.y;
			const d = Math.sqrt(dx * dx + dy * dy);
			if (d < 2 * kRadius) {
				const angle = Math.atan2(dy, dx) + kRadius / (d + 1);
				this.x += Math.cos(angle);
				this.y += Math.sin(angle);
			}
		}
		integrate() {
			sun.collide(this);
			container.limit(this);
			if (pointer.isDown && !sun.drag) this.turbine();
			const x = this.x;
			const y = this.y;
			this.x += x - this.px;
			this.y += y - this.py + kGravity;
			this.px = x;
			this.py = y;
		}
		fluid() {
			// Ref Grant Kot Material Point Method http://grantkot.com/
			let pressure = 0;
			let presnear = 0;
			const neighbors = [];
			const xc = (1 + this.x / grid.size) | 0;
			const yc = (1 + this.y / grid.size) | 0;
			for (let x = xc - 1; x < xc + 2; ++x) {
				for (let y = yc - 1; y < yc + 2; ++y) {
					const index = y * grid.width + x;
					for (
						let k = grid.max * index, end = k + grid.cellsSize[index];
						k < end;
						++k
					) {
						const pn = grid.cells[k];
						if (pn !== this) {
							const vx = pn.x - this.x;
							const vy = pn.y - this.y;
							const slen = vx * vx + vy * vy;
							if (slen < kRadius * kRadius) {
								const vlen = slen ** 0.5;
								const q = 1.0 - vlen / kRadius;
								pressure += q * q;
								presnear += q * q * q;
								neighbors.push(new Contact(pn, q, vx / vlen * q, vy / vlen * q));
							}
						}
					}
				}
			}
			pressure = (pressure - kDensity) * 1.0;
			presnear *= 0.5;
			for (let p of neighbors) {
				const pr = pressure + presnear * p.q;
				const dx = p.vx * pr;
				const dy = p.vy * pr;
				p.n.x += dx;
				p.n.y += dy;
				this.x -= dx;
				this.y -= dy;
				if (p.q > kRendering) {
					ctx.moveTo(this.x, this.y);
					ctx.lineTo(p.n.x, p.n.y);
					// ctx.stroke();
				}
			}
		}
	}
	class Circle {
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
					this.over = true;
					canvas.elem.style.cursor = "pointer";
				}
			} else {
				if (this.over && !this.drag) {
					this.over = false;
					canvas.elem.style.cursor = "crosshair";
				}
			}
			if (this.drag) {
				this.x = pointer.ex + this.dx;
				this.y = pointer.ey + this.dy;
			}
			container.limit(this, this.r);
			const x = this.x;
			const y = this.y;
			this.x += this.x - this.px;
			this.y += this.y - this.py + 2 * kGravity;
			this.px = x;
			this.py = y;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
			ctx.fillStyle = "#334";
			ctx.fill();
		}
		collide(p) {
			const dx = p.x - this.x;
			const dy = p.y - this.y;
			const dist = Math.sqrt(dx * dx + dy * dy);
			if (dist < this.r * 1.2) {
				const fx = dx / dist;
				const fy = dy / dist;
				p.x += fx;
				p.y += fy;
				this.x -= 0.01 * fx;
				this.y -= 0.01 * (fy + 2 * Math.abs(fy));
			}
		}
	}
	const container = {
		init(scale) {
			this.ai = 0;
			this.scale = scale;
			this.borders = [
				new this.Plane(),
				new this.Plane(),
				new this.Plane(),
				new this.Plane()
			];
		},
		Plane: class {
			constructor() {
				this.x = 0;
				this.y = 0;
				this.d = 0;
			}
			distanceToPlane(p) {
				return (
					(p.x - canvas.width * 0.5) * this.x +
					(p.y - canvas.height * 0.5) * this.y +
					this.d
				);
			}
			update(x, y, d) {
				this.x = x;
				this.y = y;
				this.d = d;
			}
		},
		rotate() {
			const w = canvas.width;
			const h = canvas.height;
			const s = this.scale;
			const angle = 0 & Math.sin((this.ai += pointer.isDown ? 0 : 0.05)) * s * Math.min(1.0, h / w);
			const cos = Math.cos(angle);
			const sin = Math.sin(angle);
			this.borders[0].update(-sin, cos, -h * s);
			this.borders[1].update(cos, sin, -w * s);
			this.borders[2].update(-cos, -sin, -w * s);
			this.borders[3].update(sin, -cos, -h * s);
			ctx.save();
			ctx.fillStyle = "#fff";
			ctx.translate(w * 0.5, h * 0.5);
			ctx.rotate(angle);
			ctx.fillRect(-w * s, -h * s, w * s * 2, h * s * 2);
			ctx.restore();
		},
		limit(p, radius = 0) {
			for (let b of this.borders) {
				let d = b.distanceToPlane(p) + radius + 0;
				if (d > 0) {
					p.x += b.x * -d + (Math.random() * 0.1 - 0.05);
					p.y += b.y * -d + (Math.random() * 0.1 - 0.05);
				}
			}
		}
	};
	const canvas = {
		init() {
			this.elem = document.querySelector('canvas');
			this.resize();
			window.addEventListener("resize", () => canvas.resize(), false);
			return this.elem.getContext("2d", { alpha: false });
		},
		resize() {
			this.width = this.elem.width = this.elem.offsetWidth;
			this.height = this.elem.height = this.elem.offsetHeight;
			kRadius = Math.round(0.04 * Math.sqrt(this.width * this.height));
			grid.initSize(this.width, this.height, kRadius);
			grid.fill(particles);
			if (sun) sun.r = 1.5 * kRadius;
		}
	};
	const pointer = {
		init(canvas) {
			this.x = this.ex = 0;
			this.y = this.ey = 2000;
			this.isDown = false;
			window.addEventListener("mousemove", e => this.move(e, false), false);
			canvas.elem.addEventListener("touchmove", e => this.move(e, true), false);
			window.addEventListener("mousedown", e => this.down(e, false), false);
			window.addEventListener("touchstart", e => this.down(e, true), false);
			window.addEventListener("mouseup", e => this.up(e, false), false);
			window.addEventListener("touchend", e => this.up(e, true), false);
		},
		move(e, touch) {
			if (touch) {
				e.preventDefault();
				this.x = e.targetTouches[0].clientX;
				this.y = e.targetTouches[0].clientY;
			} else {
				this.x = e.clientX;
				this.y = e.clientY;
			}
		},
		down(e, touch) {
			this.isDown = true;
			this.move(e, touch);
			if (touch) sun.anim();
			if (sun.over) {
				sun.drag = true;
				this.ex = this.x;
				this.ey = this.y;
				sun.dx = sun.x - this.ex;
				sun.dy = sun.y - this.ey;
				if (!touch) canvas.elem.style.cursor = "move";
			}
		},
		up(e, touch) {
			this.isDown = false;
			if (!touch) canvas.elem.style.cursor = "crosshair";
			sun.drag = false;
			sun.over = false;
		},
		ease(n) {
			this.ex += (this.x - this.ex) * n;
			this.ey += (this.y - this.ey) * n;
		}
	};
	const initParticles = num => {
		const s = container.scale;
		let x = canvas.width * s * 0.5;
		let y = canvas.height * s * 0.5;
		for (let i = 0; i < num; ++i) {
			particles.push(new Particle(x, y));
			x += kRadius / 2.5;
			if (x > canvas.width * (1 - s * 0.5)) {
				x = canvas.width * s * 0.5;
				y += kRadius / 3;
			}
		}
		grid.fill(particles);
	}
	let sun;
	let kRadius;
	const particles = [];
	const grid = new Grid(100); // max number of particles inside a grid
	const ctx = canvas.init();
	pointer.init(canvas);
	container.init(0.35);
	const kGravity = 0.04;
	const kDensity = 3;
	const kRendering = 0.45;
	initParticles(1200);
	sun = new Circle(
		canvas.width * 0.5,
		canvas.height * 0.5 - kRadius,
		1.5 * kRadius
	);
	const run = () => {
		requestAnimationFrame(run);
		ctx.fillStyle = "#bebebf";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		pointer.ease(0.25);
		container.rotate();
		for (let p of particles) p.integrate();
		grid.update(particles);
		ctx.beginPath();
		ctx.strokeStyle = "#556";
		for (let p of particles) p.fluid();
		ctx.stroke();
		sun.anim();
	};
	run();
}