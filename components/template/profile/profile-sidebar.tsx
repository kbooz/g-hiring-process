import {
	Avatar,
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	Link,
	List,
	ListItem,
	Spacer,
	Text,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

type FilterButton = { label: string; total?: number };

const features = {
	skills: [
		{ label: "UX Design", total: 1 },
		{ label: "UI Design" },
		{ label: "Marketing" },
		{ label: "Branding", total: 10 },
		{ label: "Product Strategy" },
		{ label: "Social" },
		{ label: "Product Design" },
		{ label: "Typography" },
		{ label: "Prototyping", total: 2 },
	] as FilterButton[],
	knowledges: [
		{ label: "Web 3" },
		{ label: "Business Law" },
		{ label: "AI", total: 3 },
		{ label: "Business Development" },
		{ label: "Product Development" },
	] as FilterButton[],
	attitudes: [
		{ label: "Pro-active" },
		{ label: "Business Driven" },
		{ label: "Collaborative" },
		{ label: "Leadership", total: 12 },
		{ label: "Innovative", total: 4 },
	] as FilterButton[],
};

export function ProfileSidebar() {
	return (
		<Box>
			<Box as="section" layerStyle="profileSection" pt={0}>
				<Flex>
					<Text>Time Zone</Text>
					<Spacer />
					<Button p={1} variant="outline-icon">
						<Icon w="1rem" h="1rem" as={HiLocationMarker} />
					</Button>
				</Flex>

				<Icon
					w="16"
					h="16"
					as={HiLocationMarker}
					textStyle="primaryGradient"
					fill="red"
				/>
				<Text>10:21 am</Text>
				<Text>Los Angeles, CA, USA</Text>
				<Text>PDT (UTC-7)</Text>
			</Box>
			<Box as="section" layerStyle="profileSection">
				<Box>
					<Flex gap={2} align="flex-start">
						<Text>Skills</Text>
						<Spacer />
						<Button p={1} variant="outline-icon">
							<Icon w="1rem" h="1rem" as={HiLocationMarker} />
						</Button>
						<Button p={1} variant="outline-icon">
							<Icon w="1.25rem" h="1.25rem" as={AiOutlinePlus} />
						</Button>
					</Flex>
					<Flex gap={2} wrap="wrap">
						{features.skills.map(({ label, total }) => (
							<Button
								key={label}
								rightIcon={<Text>{total}</Text>}
								disabled={!total}
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
								rightIcon={<Text>{total}</Text>}
								disabled={!total}
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
								rightIcon={<Text>{total}</Text>}
								disabled={!total}
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
					<Button p={1} variant="outline-icon">
						<Icon w="1rem" h="1rem" as={HiLocationMarker} />
					</Button>
					<Button p={1} variant="outline-icon">
						<Icon w="1.25rem" h="1.25rem" as={AiOutlinePlus} />
					</Button>
				</Flex>
				<Flex gap={2} wrap="wrap">
					{["English", "Spanish", "Portuguese"].map((label) => (
						<Button key={label}>{label}</Button>
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
