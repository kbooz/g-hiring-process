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

export function ProfileSidebar() {
	return (
		<Box>
			<TimeZoneSection />
			<Box as="section" layerStyle="profileSection">
				<Box>
					<Flex gap={2} align="flex-start">
						<Text>Skills</Text>
						<Spacer />
						<IconButton
							size="sm"
							variant="outline-icon"
							icon={<GateIcon type="location" />}
							aria-label="change location"
						/>
						<IconButton
							size="sm"
							variant="outline-icon"
							icon={<GateIcon type="add" w="1.25rem" h="1.25rem" />}
							aria-label="add new skill"
						/>
					</Flex>
					<Flex gap={2} wrap="wrap">
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
					<Text>Knowledge</Text>
					<Flex gap={2} wrap="wrap">
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
					<Text>Attitudes</Text>
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
				<Flex justifyContent="space-between" gap={3}>
					<Text>Languages</Text>
					<Spacer />
					<IconButton
						size="sm"
						variant="outline-icon"
						icon={<GateIcon type="location" />}
						aria-label="change main language"
					/>
					<IconButton
						size="sm"
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
				<Text>DAOs you might like</Text>
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
