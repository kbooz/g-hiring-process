import { Layer, ParallaxLayer, Rotation, Scale, Translation } from "./types";

export const defaultProp: Required<ParallaxLayer> = {
	scale: { x: 1, y: 1 },
	translation: { z: 0 },
};

export const mergeProps = (props?: ParallaxLayer) => {
	const {
		translation = { ...defaultProp.translation },
		scale = { ...defaultProp.scale },
	} = props ?? defaultProp;
	return { translation, scale };
};

export const calculateRotation = ({ x, y }: Rotation, baseRotation = 20) =>
	window
		? {
				x: -(y - window.innerHeight / 2) / baseRotation,
				y: (x - window.innerWidth / 2) / baseRotation,
		  }
		: { x: 0, y: 0 };

const formatRotation = ({ x, y }: Rotation) =>
	`rotateX(${x ?? 0}deg) rotateY(${y ?? 0}deg)`;

const formatTranslation = ({ z }: Translation) => `translateZ(${z ?? 0}px)`;

const formatScale = ({ x, y }: Scale) => `scaleX(${x ?? 1}) scaleY(${y ?? 1})`;

export const formatTransform = ({
	rotation,
	translation,
	scale,
}: Required<Layer>) =>
	`${formatRotation(rotation)} ${formatTranslation(translation)} ${formatScale(
		scale
	)}`;
