import { Rotation, Scale, Translation } from "@/types/coordinates";

export type Layer = {
	rotation?: Rotation;
	translation?: Translation;
	scale?: Scale;
};

export type ParallaxLayer = Pick<Layer, "scale" | "translation">;
