import { Float, type FloatProps } from "@react-three/drei";
import { Color } from "three";
type Props = {
	position?: FloatProps["position"];
	color?: Color | string;
};
export function Blobs({ position, color = "pink" }: Props) {
	return (
		<Float
			scale={0.75}
			position={position}
			rotation={[0, 0.6, 0]}
			floatIntensity={8}
		>
			<mesh>
				<sphereGeometry />
				<meshPhysicalMaterial
					color={color}
					transmission={0.99}
					metalness={0}
					roughness={0.25}
					ior={2}
					thickness={0}
					specularColor={color}
					specularIntensity={0.25}
					envMapIntensity={1}
				/>
			</mesh>
		</Float>
	);
}
