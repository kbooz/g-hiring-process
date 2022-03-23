import { Suspense, useRef } from "react";

import { Environment, Loader } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { Group, Vector3 } from "three";

import { Blobs } from "./blobs";
import { Stars } from "./stars";

const fullScale = new Vector3(1, 1, 1);

function Galaxy() {
	const ref = useRef<Group>(null!);

	useFrame(({ clock }) => {
		ref.current.scale.lerp(fullScale, clock.getElapsedTime() / 10);
	});

	return (
		<group ref={ref} scale={[0, 0, 0]}>
			<ambientLight />
			<perspectiveCamera
				fov={60}
				near={1}
				far={1000}
				position={[Math.PI / 2, 0, 1]}
			/>
			<Stars />
			<Blobs position={[-3, 1, 0]} />
			<Blobs position={[3, -1, 0]} color="blue" />
			<pointLight position={[100, 100, -200]} color="red" intensity={10} />
			<pointLight position={[-10, -10, -10]} color="blue" intensity={10} />
		</group>
	);
}

export function Explosion() {
	return (
		<Canvas gl={{ alpha: true, antialias: true }}>
			<Galaxy />
			<EffectComposer>
				<DepthOfField focusDistance={1.25} focalLength={3} bokehScale={1.5} />
			</EffectComposer>
		</Canvas>
	);
}
