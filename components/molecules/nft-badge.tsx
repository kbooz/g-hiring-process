import { Box, Img, Text } from "@chakra-ui/react";

type Props = {
	label?: string;
	bg?: string;
	name: string;
	image: string;
	earnDate?: string; // TODO: parse date with moment/dayjs/date-fn
	small?: boolean;
};

function NFTBadge({ name, earnDate, label = "NFT Badge", image }: Props) {
	return (
		<Box borderRadius="2xl" overflow="hidden">
			<Img
				src={image}
				alt={name}
				objectFit="cover"
				width="100%"
				height="100%"
			/>
			<Box p={4} bg="white" d="flex" justifyContent="space-between">
				<Box>
					<Text color="brand.purple.900">{label}</Text>
					<Text textStyle="bg" fontWeight="bold" fontSize="3xl">
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
