import {
	Box,
	type BoxProps,
	Image,
	Text,
	HStack,
	VStack,
} from "@chakra-ui/react";

import { NFT } from "@/types/nft";

import { MotionBox, MotionBoxProps } from "../atoms/motion";

type Props = {
	isSmall?: boolean;
} & NFT;

function NFTBadge({
	name,
	altName,
	date,
	image,
	isSmall,
	...props
}: Props & MotionBoxProps) {
	return (
		<MotionBox borderRadius="2xl" overflow="hidden" {...props}>
			<Image
				src={image}
				alt={altName}
				objectFit="cover"
				width="100%"
				height="100%"
				sx={{ aspectRatio: "1/1" }}
				fallback={
					<Box bg="gray.200" w="100%" h="100%" sx={{ aspectRatio: "1/1" }} />
				}
			/>
			<HStack
				p={isSmall ? 3 : 4}
				bg="white"
				justifyContent="space-between"
				alignItems="stretch"
				color="brand.purple.900"
				fontSize={isSmall ? 8 : "sm"}
				lineHeight="1"
			>
				<VStack alignItems="flex-start" spacing={["2", null, 1]}>
					<Text>{name}</Text>
					<Text
						fontFamily="heading"
						textStyle="primaryGradient"
						fontWeight="bold"
						fontSize={isSmall ? "sm" : ["xl", null, "3xl"]}
						lineHeight={"1.2"}
						letterSpacing={isSmall ? "normal" : undefined}
						textOverflow="ellipsis"
					>
						{name}
					</Text>
				</VStack>
				{date && (
					<VStack
						alignItems="flex-start"
						justifyContent="space-between"
						spacing={["2", null, 1]}
					>
						<Text opacity={0.6}>Earned</Text>
						<Text lineHeight={2}>{date}</Text>
					</VStack>
				)}
			</HStack>
		</MotionBox>
	);
}

export default NFTBadge;
