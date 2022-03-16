import { Box, Button, HStack, Icon, Text } from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";

import { CropText } from "@/components/atoms/crop-text";
import { GateIcon } from "@/components/atoms/icons";

import { useProfile } from "./profile.context";

export function ProfileAbout() {
	const { about } = useProfile();

	return (
		<Box as="section" layerStyle="profileSection" pb={14}>
			<HStack justifyContent="space-between" mb={30}>
				<Text textStyle="sectionTitle" fontSize="3xl">
					About
				</Text>
				<Button variant="outline-icon">
					<GateIcon type="edit" w=".75rem" h=".75rem" />
				</Button>
			</HStack>
			<CropText>{about}</CropText>
		</Box>
	);
}
