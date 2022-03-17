import { Avatar, Box, Link, List, ListItem, Text } from "@chakra-ui/react";

export function DAOSuggestionSection() {
	return (
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
	);
}
