import {
	Box,
	Button,
	HStack,
	Icon,
	IconButton,
	Text,
	VStack,
} from "@chakra-ui/react";

import { GateIcon } from "@/components/atoms/icons";

import { useProfile } from "../profile.context";
import { ExperienceSeciton } from "./experience-section";

export function ProfileExperiences() {
	const { experiences } = useProfile();

	return (
		<Box as="section" layerStyle="profileSection" borderBottom="0">
			<HStack justifyContent="space-between" mb={30}>
				<Text textStyle="sectionTitle" fontSize="3xl">
					Experience
				</Text>
				<IconButton
					variant="outline-icon"
					size="sm"
					icon={<GateIcon type="add" w="1.25rem" h="1.25rem" />}
					aria-label="add new experience"
				/>
			</HStack>
			<VStack spacing="0" gap={10} alignItems="stretch">
				{experiences.map((experience) => (
					<ExperienceSeciton
						key={experience.role + experience.start}
						{...experience}
					/>
				))}
			</VStack>
		</Box>
	);
}
