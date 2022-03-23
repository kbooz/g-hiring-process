import { useMemo, useRef } from "react";

import { Environment, Float, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
	CanvasTexture,
	Group,
	NearestFilter,
	RepeatWrapping,
	Vector3,
} from "three";

const total = 10;

export function Blobs() {
	return (
		<Float scale={0.75} position={[0, 0, 0]} rotation={[0, 0.6, 0]}>
			<mesh renderOrder={1}>
				<sphereGeometry />
				<meshPhysicalMaterial
					color="#fff"
					transmission={0.99}
					opacity={1}
					metalness={0}
					roughness={0.16}
					ior={2}
					thickness={0}
					specularColor="#fff"
					specularIntensity={1}
					envMapIntensity={1}
				/>
			</mesh>
		</Float>
	);
}
