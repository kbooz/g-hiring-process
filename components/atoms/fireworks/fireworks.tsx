import dynamic from "next/dynamic";
import { useEffect } from "react";

import Sketch from "react-p5";

import { setup, draw, windowResized, onEnter, onExit } from "./game";

export default function Fireworks() {
	useEffect(() => {
		onEnter();
		() => {
			onExit();
		};
	}, []);

	return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
}
