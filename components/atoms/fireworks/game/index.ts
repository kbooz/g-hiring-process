import type P5 from "p5";

import colors from "@/theme/colors";

let x = 0;
let y = 0;

export const setup = (p5: P5, canvasParentRef: Element) => {
	p5.createCanvas(window.innerWidth, window.innerHeight).parent(
		canvasParentRef
	);

	window.addEventListener("mousedown", () => {
		x = 0;
	});
};

export const draw = (p5: P5) => {
	p5.background(colors.brand.purple[900]);
	p5.ellipse(x, y, 70, 70);
	x++;
};

export const windowResized = (p5: P5) => {
	p5.resizeCanvas(window.innerWidth, window.innerHeight);
};
