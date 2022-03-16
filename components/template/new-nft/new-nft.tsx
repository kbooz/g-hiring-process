import dynamic from "next/dynamic";
import Link from "next/link";

import { Box, Button, HStack, Img, Text } from "@chakra-ui/react";

import {
	MotionBox,
	MotionButtonGroup,
	MotionFlex,
} from "@/components/atoms/motion";
import NFTBadge from "@/components/molecules/nft-badge";
import { NFTwithDAO } from "@/types/nft";

import {
	container,
	textAnimation,
	cardAnimation,
	buttonsAnimation,
} from "./animations";

const Fireworks = dynamic(() => import("@/components/atoms/fireworks"), {
	ssr: false,
});

type Props = {
	nft: NFTwithDAO;
};

export function NewNFTTemplate({ nft }: Props) {
	return (
		<>
			<Box position="fixed" zIndex={1} inset={0}>
				<Fireworks />
			</Box>
			<MotionFlex
				as="main"
				direction="column"
				position="relative"
				align="center"
				py={8}
				px={6}
				gap={[12, 8]}
				initial="hidden"
				animate="show"
				variants={container}
				zIndex={2}
			>
				<MotionBox variants={textAnimation} textAlign="center">
					<Text
						as="h1"
						fontFamily="heading"
						display="inline-block"
						textStyle="primaryGradient"
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
					<NFTBadge {...nft} />
				</MotionBox>
				<MotionButtonGroup
					flexFlow={["column", "row"]}
					spacing={0}
					gap={[4, 2]}
					alignSelf="stretch"
					justifyContent="center"
					variants={buttonsAnimation}
				>
					<Link href="/profile" passHref>
						<Button as="a" fontSize="xs">
							Check your profile
						</Button>
					</Link>
					<Button fontSize="xs" w={["100%", "10rem"]}>
						Close
					</Button>
				</MotionButtonGroup>
			</MotionFlex>
		</>
	);
}
