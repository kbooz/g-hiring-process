import { Box, Button, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";

import { GateIcon } from "@/components/atoms/icons";

export function LanguagesSection() {
	return (
		<Box as="section" layerStyle="profileSection">
			<Flex gap={3} mb="4">
				<Text textStyle="sectionTitle" fontSize="lg">
					Languages
				</Text>
				<Spacer />
				<IconButton
					size="xs"
					variant="outline-icon"
					icon={<GateIcon type="location" />}
					aria-label="change main language"
				/>
				<IconButton
					size="xs"
					variant="outline-icon"
					icon={<GateIcon type="add" w="1.25rem" h="1.25rem" />}
					aria-label="add new language"
				/>
			</Flex>
			<Flex gap={2} wrap="wrap">
				{["English", "Spanish", "Portuguese"].map((label) => (
					<Button variant="tag" size="sm" key={label}>
						{label}
					</Button>
				))}
			</Flex>
		</Box>
	);
}
