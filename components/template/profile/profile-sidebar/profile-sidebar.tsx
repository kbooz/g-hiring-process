import {
	Avatar,
	Box,
	Button,
	Flex,
	IconButton,
	Link,
	List,
	ListItem,
	Spacer,
	Text,
} from "@chakra-ui/react";

import { GateIcon } from "@/components/atoms/icons";

import { features } from "./mock";
import { TimeZoneSection } from "./timezone-section";

type Props = {
	bioHeight: number;
};

export function ProfileSidebar({ bioHeight }: Props) {
	return (
		<Box>
			<TimeZoneSection minHeight={bioHeight} />
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
			<Box as="section" layerStyle="profileSection">
				<Flex justifyContent="space-between" gap={3} mb="4">
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
			<Box as="section" layerStyle="profileSection" borderBottom={0}>
				<Text textStyle="sectionTitle" fontSize="lg" mb="4">
					DAOs you might like
				</Text>
				<List display="flex" flexDirection="column" gap={3}>
					{[
						"Seed Club",
						"Buildspace",
						"Friends with Benefits",
						"Uniswap",
						"PleasrDAO",
					].map((label) => (
						<ListItem key={label}>
							<Link display="flex" alignItems="center" gap={3}>
								<Avatar src="/images/bankless-dao.png" />
								{label}
							</Link>
						</ListItem>
					))}
				</List>
			</Box>
		</Box>
	);
}
