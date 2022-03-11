import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { IoNotifications } from "react-icons/io5";

import Logo from "@/components/atoms/icons/logo";

import Search from "../molecules/search";

function Menu() {
	return (
		<Box as="nav" px={6}>
			<HStack
				py={4}
				justifyContent="space-between"
				borderBottom="1px"
				borderBottomColor="whiteAlpha.100"
			>
				<HStack gap={4} alignItems="center" w="40%">
					<Logo w={10} h={10} />
					<Search />
				</HStack>
				<HStack gap={4} alignItems="center">
					{["DAOs", "Gates", "People", "Join Discord"].map((s) => (
						<Text key={s}>{s}</Text>
					))}
					<Button variant="outlineIcon">
						<IoNotifications />
					</Button>
				</HStack>
			</HStack>
		</Box>
	);
}

export default Menu;
