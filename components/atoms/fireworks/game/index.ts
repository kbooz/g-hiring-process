import type P5 from "p5";

import colors from "@/theme/colors";
import { Position } from "@/types/coordinates";

import { Emitter } from "./emitter";
import Obj from "./obj";

const emitter = new Emitter();

const blobs: Obj[] = [];

let mousePosition: Position | undefined;
let createdBlob = false;

const onMousePressed = (e: MouseEvent) => {
	mousePosition = { x: e.x, y: e.y };
};
const onMouseUp = () => {
	mousePosition = undefined;
	createdBlob = false;
};

export const setup = (p5: P5, canvasParentRef: Element) => {
	p5.createCanvas(window.innerWidth, window.innerHeight).parent(
		canvasParentRef
	);
};

export const draw = (p5: P5) => {
	p5.background(colors.brand.purple[900]);

	if (mousePosition && !createdBlob) {
		blobs.push(new Obj(p5, emitter.position, mousePosition));
		createdBlob = true;
	}

	blobs.forEach((blob) => blob.draw(p5));
};

export const windowResized = (p5: P5) => {
	p5.resizeCanvas(window.innerWidth, window.innerHeight);
	emitter.resetPosition();
};

export const onEnter = () => {
	window.addEventListener("mousedown", onMousePressed);
	window.addEventListener("mouseup", onMouseUp);
};

export const onExit = () => {
	window.removeEventListener("mousedown", onMousePressed);
	window.removeEventListener("mouseup", onMouseUp);
};
