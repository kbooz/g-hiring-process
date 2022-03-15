import { Box, Button, HStack, Icon, Text } from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";

import { CropText } from "@/components/atoms/crop-text";

export function ProfileAbout({ about }: { about: string }) {
	return (
		<Box as="section" layerStyle="profileSection" pb={14}>
			<HStack justifyContent="space-between" mb={30}>
				<Text textStyle="sectionTitle" fontSize="3xl">
					About
				</Text>
				<Button variant="outline-icon">
					<Icon w=".75rem" h=".75rem" as={FaPen} />
				</Button>
			</HStack>
			<CropText>{about}</CropText>
		</Box>
	);
}
