import type { Vector3, Color } from "three";

export type Star = {
	pos: Vector3;
	velocity: number;
	acceleration: number;
	color: Color;
};
