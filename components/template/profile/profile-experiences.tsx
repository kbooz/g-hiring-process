import { Box, Button, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

import { ProfileExperience } from "@/types/profile";

import { ExperienceSeciton } from "./experience/experience-section";

export function ProfileExperiences({
	experiences,
}: {
	experiences: ProfileExperience[];
}) {
	return (
		<Box as="section" layerStyle="profileSection" borderBottom="0">
			<HStack justifyContent="space-between" mb={30}>
				<Text textStyle="sectionTitle" fontSize="3xl">
					Experience
				</Text>
				<Button variant="outline-icon" p={1}>
					<Icon w="1.25rem" h="1.25rem" as={AiOutlinePlus} />
				</Button>
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
