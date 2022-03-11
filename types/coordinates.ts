import { Optional } from "utility-types";

export type Coordinates = { x: number; y: number; z: number };
export type Position = Pick<Coordinates, "x" | "y">;
export type Rotation = Pick<Coordinates, "x" | "y">;
export type Translation = Pick<Coordinates, "z">;
export type Scale = Optional<Coordinates, "z">;
