import { useMemo, useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { InstancedMesh, Vector3, Matrix4 } from "three";

import { getRandomColorFromPallete } from "./pallete";
import type { Star } from "./types";

const total = 1500;

export function Stars() {
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

	useFrame(({ clock }) => {
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
		ref.current.rotation.z += 0.005;
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
