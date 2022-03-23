import { Box, Button, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";

import { GateIcon } from "@/components/atoms/icons";

import { features, FilterButton } from "./mock";

function TotalTag({ total }: { total?: number }) {
	if (!total) return null;
	return (
		<Text
			display="flex"
			alignItems="center"
			justifyContent="center"
			fontSize="xs"
			lineHeight="1"
			rounded="full"
			bg="brand.purple.900"
			color="white"
			width={6}
			height={6}
			transition="all 0.2s ease-in-out"
			_groupHover={{
				color: "white",
				transform: "scale(1.1)",
			}}
			_groupFocus={{
				color: "white",
				transform: "scale(1.1)",
			}}
		>
			{total}
		</Text>
	);
}

function FilterButtons({ options }: { options: FilterButton[] }) {
	return (
		<>
			{options.map(({ label, total }) => (
				<Button
					key={label}
					variant="tag"
					rightIcon={<TotalTag total={total} />}
					disabled={!total}
					size="sm"
					className="group"
				>
					{label}
				</Button>
			))}
		</>
	);
}

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
						icon={<GateIcon type="edit" />}
						aria-label="edit skills"
					/>
					<IconButton
						size="xs"
						variant="outline-icon"
						icon={<GateIcon type="add" w="1.25rem" h="1.25rem" />}
						aria-label="add new skill"
					/>
				</Flex>
				<Flex gap={2} wrap="wrap" mb="6">
					<FilterButtons options={features.skills} />
				</Flex>
			</Box>
			<Box>
				<Flex gap={2} align="flex-start" mb="4">
					<Text textStyle="sectionTitle" fontSize="lg">
						Knowledges
					</Text>
					<Spacer />
					<IconButton
						size="xs"
						variant="outline-icon"
						icon={<GateIcon type="edit" />}
						aria-label="edit knowledges"
					/>
					<IconButton
						size="xs"
						variant="outline-icon"
						icon={<GateIcon type="add" w="1.25rem" h="1.25rem" />}
						aria-label="add new knowledges"
					/>
				</Flex>
				<Flex gap={2} wrap="wrap" mb="6">
					<FilterButtons options={features.knowledges} />
				</Flex>
			</Box>
			<Box>
				<Flex gap={2} align="flex-start" mb="4">
					<Text textStyle="sectionTitle" fontSize="lg">
						Attitudes
					</Text>
					<Spacer />
					<IconButton
						size="xs"
						variant="outline-icon"
						icon={<GateIcon type="edit" />}
						aria-label="edit attitudes"
					/>
					<IconButton
						size="xs"
						variant="outline-icon"
						icon={<GateIcon type="add" w="1.25rem" h="1.25rem" />}
						aria-label="add new attitudes "
					/>
				</Flex>
				<Flex gap={2} wrap="wrap">
					<FilterButtons options={features.attitudes} />
				</Flex>
			</Box>
		</Box>
	);
}
