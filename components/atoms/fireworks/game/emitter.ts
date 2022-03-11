import { Position } from "@/types/coordinates";

import { getCenter } from "./utils";

export class Emitter {
	position: Position = getCenter();

	resetPosition() {
		const newCenter = getCenter();
		this.position.x = newCenter.x;
		this.position.y = newCenter.y;
	}
}
