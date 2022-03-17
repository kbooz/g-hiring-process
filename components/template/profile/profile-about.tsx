import { Box, Button, HStack, Icon, IconButton, Text } from "@chakra-ui/react";
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
				<IconButton
					variant="outline-icon"
					size="sm"
					icon={<GateIcon type="add" w="1.25rem" h="1.25rem" />}
					aria-label="add new experience"
				/>
			</HStack>
			<CropText>{about}</CropText>
		</Box>
	);
}
