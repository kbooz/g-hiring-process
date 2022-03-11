import { Position } from "@/types/coordinates";

export const getCenter = (): Position => ({
	x: window.innerWidth / 2,
	y: window.innerHeight / 2,
});

export const rotationInRadians = (mouse: Position, emitter: Position) =>
	Math.atan2(mouse.y - emitter.y, mouse.x - emitter.x) - Math.PI;

export const rotationInDegrees = (radians: number) =>
	(radians * 180) / Math.PI + 360;

export const random = (min: number, max: number) =>
	Math.random() * (max - min) + min;
