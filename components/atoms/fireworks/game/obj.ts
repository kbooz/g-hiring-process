import type P5 from "p5";

import { Position } from "@/types/coordinates";

import { random } from "./utils";

export default class Obj {
	/* Visual */
	radius = 10;
	hue = random(0, 360);
	length = 10;

	/* Position */
	start: Position = {
		x: 0,
		y: 0,
	};

	position: Position = {
		x: 0,
		y: 0,
	};

	target: Position = {
		x: 0,
		y: 0,
	};

	coordinates: Position[] = [];

	angle = 0;
	speed = 20;
	friction = 0.99;
	distanceToTarget = 1000;
	distanceTraveled = 0;

	constructor(p5: P5, emitter: Position, target: Position) {
		this.start = {
			...emitter,
		};

		this.position = {
			...emitter,
		};

		this.target = {
			...target,
		};

		this.distanceToTarget = p5.dist(emitter.x, emitter.y, target.x, target.y);

		this.angle = Math.atan2(
			this.target.y - this.start.y,
			this.target.x - this.start.x
		);

		for (let i = 0; i < this.length; i++) {
			this.coordinates.push({
				...this.position,
			});
		}
	}

	/* Returns boolean value about the animation status */
	draw(p5: P5): boolean {
		const lastCoord = this.coordinates[this.coordinates.length - 1];
		(p5.drawingContext as CanvasRenderingContext2D).setLineDash([5, 10]);
		p5.stroke("white");
		p5.strokeWeight(2);
		p5.line(lastCoord.x, lastCoord.y, this.position.x, this.position.y);
		this.coordinates.pop();
		this.coordinates.unshift({ ...this.position });

		this.speed *= this.friction;

		const vx = Math.cos(this.angle) * this.speed;
		const vy = Math.sin(this.angle) * this.speed;

		this.distanceTraveled = p5.dist(
			this.start.x,
			this.start.y,
			this.position.x + vx,
			this.position.y + vy
		);

		if (this.distanceTraveled >= this.distanceToTarget) {
			return true;
		}

		this.position.x += vx;
		this.position.y += vy;
		return false;
	}
}
