import { MouseEventHandler, useCallback, useState } from "react";

import { Rotation } from "./types";
import { calculateRotation } from "./utils";

export function useRotation(baseRotation = 20) {
	const [rotation, setRotation] = useState<Rotation>({ x: 0, y: 0 });

	const onMouseMove = useCallback(
		(x: number, y: number) => {
			setRotation(calculateRotation({ x, y }, baseRotation));
		},
		[baseRotation]
	);

	const onMouseLeave = useCallback(() => {
		setRotation(
			calculateRotation({
				x: window?.innerWidth / 2,
				y: window?.innerHeight / 2,
			})
		);
	}, []);
	return { rotation, onMouseMove, onMouseLeave };
}
