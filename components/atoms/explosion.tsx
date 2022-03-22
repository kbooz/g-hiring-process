import { useMemo, useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
// import { useControls } from "leva";
import { InstancedMesh, Vector3, Matrix4, Mesh, Color } from "three";

const total = 1500;

type Star = {
	pos: Vector3;
	velocity: number;
	acceleration: number;
	color: Color;
};

const pallete = [
	"#f44336",
	"#e91e63",
	"#9c27b0",
	"#673ab7",
	"#3f51b5",
	"#2196f3",
	"#03a9f4",
	"#00bcd4",
	"#009688",
	"#4caf50",
	"#8bc34a",
	"#cddc39",
	"#ffeb3b",
	"#ffc107",
	"#ff9800",
	"#ff5722",
	"#795548",
	"#607d8b",
];

/* 
	Gets random color from pallete based on the item index
*/
const getRandomColorFromPallete = (index: number): Color =>
	new Color(pallete[index % pallete.length]);

function Dots() {
	const ref = useRef<InstancedMesh>(null!);

	const { vec, stars, transform } = useMemo(() => {
		const vec = new Vector3();
		const transform = new Matrix4();
		const stars: Star[] = [...Array(total)].map((_, i) => ({
			pos: new Vector3(
				Math.random() * 600 - 300,
				Math.random() * 600 - 300,
				Math.random() * 600 - 300
			),
			velocity: 0,
			acceleration: 0.02,
			color: getRandomColorFromPallete(i),
		}));

		return { vec, transform, stars };
	}, []);

	useFrame(() => {
		for (let i = 0; i < total; i++) {
			const star = stars[i];
			star.velocity += star.acceleration;
			star.pos.z += star.velocity;

			if (star.pos.z > 300) {
				star.pos.z = -300;
				star.velocity = 0;
			}
			vec.copy(star.pos);
			transform.setPosition(vec);
			ref.current.setMatrixAt(i, transform);
			ref.current.setColorAt(i, star.color);
		}
		// ref.current.rotation.y += 0.01;
		ref.current.instanceMatrix.needsUpdate = true;
		ref.current.instanceColor!.needsUpdate = true;
	});

	return (
		<instancedMesh ref={ref} args={[undefined, undefined, total]}>
			<circleBufferGeometry args={[0.2]} />
			<meshBasicMaterial />
		</instancedMesh>
	);
}

export function Explosion() {
	return (
		<Canvas>
			<ambientLight />
			<perspectiveCamera
				fov={60}
				near={1}
				far={1000}
				position={[Math.PI / 2, 0, 1]}
			/>
			<Dots />
			<EffectComposer>
				<DepthOfField
					focusDistance={1.25}
					focalLength={0.75}
					bokehScale={1.5}
				/>
			</EffectComposer>
		</Canvas>
	);
}
