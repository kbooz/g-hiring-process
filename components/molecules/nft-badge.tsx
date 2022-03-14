import { Box, type BoxProps, Image, Text } from "@chakra-ui/react";

type Props = {
	label?: string;
	bg?: string;
	name: string;
	image: string;
	earnDate?: string; // TODO: parse date with moment/dayjs/date-fn
	small?: boolean;
};

function NFTBadge({
	name,
	earnDate,
	label = "NFT Badge",
	image,
	...props
}: Props & BoxProps) {
	return (
		<Box borderRadius="2xl" overflow="hidden" {...props}>
			<Image
				src={image}
				alt={name}
				objectFit="cover"
				width="100%"
				height="100%"
				sx={{ aspectRatio: "1/1" }}
				fallback={
					<Box bg="gray.200" w="100%" h="100%" sx={{ aspectRatio: "1/1" }} />
				}
			/>
			<Box p={4} bg="white" display="flex" justifyContent="space-between">
				<Box display="flex" flexFlow="column" gap={["2", null, 1]}>
					<Text fontSize="xs" color="brand.purple.900" lineHeight="1">
						{label}
					</Text>
					<Text
						display="inline-block"
						fontFamily="heading"
						textStyle="primaryGradient"
						fontWeight="bold"
						fontSize={["xl", null, "3xl"]}
						lineHeight={["1.2", null, "1.2"]}
					>
						{name}
					</Text>
				</Box>
				{earnDate && (
					<Box>
						<Text>Earned</Text>
						<Text>{earnDate}</Text>
					</Box>
				)}
			</Box>
		</Box>
	);
}

export default NFTBadge;
