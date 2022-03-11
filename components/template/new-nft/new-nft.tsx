import { useLayoutEffect } from "react";

import { Box, Button, HStack, Img, Text } from "@chakra-ui/react";

import { Fireworks } from "@/components/atoms/fireworks";
import { MotionBox, MotionButtonGroup } from "@/components/atoms/motion";
import NFTBadge from "@/components/molecules/nft-badge";
// import { useParallax } from "@/utils/useParallax/useParallax";

import { NFT } from "@/types/nft";

import {
	container,
	textAnimation,
	cardAnimation,
	buttonsAnimation,
} from "./animations";

type Props = {
	nft: NFT;
	menuHeight: number;
};

function NewNFT({ nft, menuHeight }: Props) {
	return (
		<>
			<Box position="fixed">
				<Fireworks />
			</Box>
			<MotionBox
				as="main"
				py="8"
				px={6}
				height={`calc(100% - ${menuHeight}px)`}
				display="flex"
				flexFlow="column"
				alignItems="center"
				gap={[10, 8]}
				initial="hidden"
				animate="show"
				variants={container}
			>
				<MotionBox variants={textAnimation} textAlign="center">
					<Text
						as="h1"
						textStyle="bg"
						fontSize={["4xl", "5xl", "6xl"]}
						fontWeight="extrabold"
					>
						Congratulations!
					</Text>
					<Text>
						You have earned the{" "}
						<Text as="b" color="brand.pink.500">
							{nft.altName}
						</Text>{" "}
						Badge from{" "}
						<HStack display="inline-flex" as="a" verticalAlign="bottom">
							<Img rounded="full" w={6} h={6} src={nft.dao.image} />{" "}
							<Text as="b">{nft.dao.name}</Text>
						</HStack>
					</Text>
				</MotionBox>
				<MotionBox
					variants={cardAnimation}
					w="25%"
					minW="72"
					sx={{ aspectRatio: "1 / 1", perspective: "600px" }}
				>
					<NFTBadge name={nft.name} image={nft.image} />
				</MotionBox>
				<MotionButtonGroup
					flexFlow={["column", "row"]}
					spacing={[0, "2"]}
					gap={[4, 0]}
					alignSelf="stretch"
					justifyContent="center"
					variants={buttonsAnimation}
				>
					<Button>Check your profile</Button>
					<Button w={["100%", "10rem"]}>Close</Button>
				</MotionButtonGroup>
			</MotionBox>
		</>
	);
}

export default NewNFT;
