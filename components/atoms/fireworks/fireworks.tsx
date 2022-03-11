import dynamic from "next/dynamic";

import { setup, draw, windowResized } from "./game";

const Sketch = dynamic(() => import("react-p5"), {
	ssr: false,
});

export function Fireworks() {
	return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
}
