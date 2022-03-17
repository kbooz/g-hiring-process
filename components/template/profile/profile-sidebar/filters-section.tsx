import { Box, Button, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";

import { GateIcon } from "@/components/atoms/icons";

import { features } from "./mock";

export function FiltersSection() {
	return (
		<Box as="section" layerStyle="profileSection">
			<Box>
				<Flex gap={2} align="flex-start" mb="4">
					<Text textStyle="sectionTitle" fontSize="lg">
						Skills
					</Text>
					<Spacer />
					<IconButton
						size="xs"
						variant="outline-icon"
						icon={<GateIcon type="location" />}
						aria-label="change location"
					/>
					<IconButton
						size="xs"
						variant="outline-icon"
						icon={<GateIcon type="add" w="1.25rem" h="1.25rem" />}
						aria-label="add new skill"
					/>
				</Flex>
				<Flex gap={2} wrap="wrap" mb="6">
					{features.skills.map(({ label, total }) => (
						<Button
							key={label}
							variant="tag"
							rightIcon={total ? <Text>{total}</Text> : undefined}
							disabled={!total}
							size="sm"
						>
							{label}
						</Button>
					))}
				</Flex>
			</Box>
			<Box>
				<Text textStyle="sectionTitle" fontSize="lg" mb="4">
					Knowledge
				</Text>
				<Flex gap={2} wrap="wrap" mb="6">
					{features.knowledges.map(({ label, total }) => (
						<Button
							key={label}
							variant="tag"
							rightIcon={total ? <Text>{total}</Text> : undefined}
							disabled={!total}
							size="sm"
						>
							{label}
						</Button>
					))}
				</Flex>
			</Box>
			<Box>
				<Text textStyle="sectionTitle" fontSize="lg" mb="4">
					Attitudes
				</Text>
				<Flex gap={2} wrap="wrap">
					{features.attitudes.map(({ label, total }) => (
						<Button
							key={label}
							variant="tag"
							rightIcon={total ? <Text>{total}</Text> : undefined}
							disabled={!total}
							size="sm"
						>
							{label}
						</Button>
					))}
				</Flex>
			</Box>
		</Box>
	);
}
