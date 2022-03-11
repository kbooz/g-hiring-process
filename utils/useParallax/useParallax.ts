import { Layer, ParallaxLayer, Rotation } from "./types";
import { useRotation } from "./useRotation";
import { formatTransform, mergeProps } from "./utils";

/* 
TODO: Create rotation context for useParallax
*/

function modifyTransform({
	rotation,
	...layer
}: Omit<Layer, "rotation"> & { rotation: Rotation }) {
	const { translation, scale } = mergeProps(layer);
	return formatTransform({ rotation, translation, scale });
}

export function useParallax(
	props?: ParallaxLayer | ParallaxLayer[],
	baseRotation?: number
) {
	const { rotation, onMouseLeave, onMouseMove } = useRotation(baseRotation);

	if (Array.isArray(props)) {
		const layers = props.map((layer) =>
			modifyTransform({ ...layer, rotation })
		);
		return { layers, onMouseLeave, onMouseMove };
	}

	return {
		transform: modifyTransform({ rotation, ...props }),
		onMouseLeave,
		onMouseMove,
	};
}
