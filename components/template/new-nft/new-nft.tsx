import { useLayoutEffect } from "react";

import { Button, Text } from "@chakra-ui/react";

import { MotionBox, MotionButtonGroup } from "@/components/atoms/motion";
import NFTBadge from "@/components/molecules/nft-badge";
// import { useParallax } from "@/utils/useParallax/useParallax";

import {
	container,
	textAnimation,
	cardAnimation,
	buttonsAnimation,
} from "./animations";

function NewNFT() {
	/* 	const { transform, onMouseMove, onMouseLeave } = useParallax(
		{
			scale: {
				x: 1,
				y: 1,
			},
		},
		20
	);

	useLayoutEffect(() => {
		const mouseEvent = (e: MouseEvent) => {
			if (window.innerWidth > 1023) {
				onMouseMove(e.clientX, e.clientY);
			}
		};

		document.addEventListener("mousemove", mouseEvent);
		document.addEventListener("mouseleave", onMouseLeave);
		return () => {
			document.removeEventListener("mousemove", mouseEvent);
			document.removeEventListener("mouseleave", onMouseLeave);
		};
	}, [onMouseLeave, onMouseMove]);
 */
	return (
		<>
			<MotionBox
				as="main"
				py="8"
				d="flex"
				flexFlow="column"
				alignItems="center"
				gap="8"
				initial="hidden"
				animate="show"
				variants={container}
			>
				<MotionBox variants={textAnimation} textAlign="center">
					<Text as="h1" textStyle="bg" fontSize="6xl" fontWeight="extrabold">
						Congratulations!
					</Text>
					<Text>
						You have earned the{" "}
						<Text as="b" color="brand.pink.500">
							Bankless Beginner
						</Text>{" "}
						Badge from
					</Text>
				</MotionBox>
				<MotionBox
					variants={cardAnimation}
					w="25%"
					sx={{ aspectRatio: "1 / 1", perspective: "600px" }}
				>
					<NFTBadge
						name="BANK.Beginner"
						image="https://source.unsplash.com/500x500"
					/>
				</MotionBox>
				<MotionButtonGroup
					spacing="2"
					alignSelf="stretch"
					justifyContent="center"
					variants={buttonsAnimation}
				>
					<Button>Check your profile</Button>
					<Button w="10rem">Close</Button>
				</MotionButtonGroup>
			</MotionBox>
		</>
	);
}

export default NewNFT;
