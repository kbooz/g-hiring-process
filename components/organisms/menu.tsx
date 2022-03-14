import {
	Box,
	type BoxProps,
	Button,
	forwardRef,
	HStack,
	Text,
} from "@chakra-ui/react";
import { IoNotifications } from "react-icons/io5";

import Logo from "@/components/atoms/icons/logo";

import Search from "../molecules/search";

const Menu = forwardRef<BoxProps, "nav">(function Menu(props, ref) {
	return (
		<Box as="nav" px={6} ref={ref} position="relative" zIndex={10} {...props}>
			<HStack
				py={4}
				justifyContent="space-between"
				borderBottom="1px"
				borderBottomColor="whiteAlpha.100"
			>
				<HStack gap={4} alignItems="center" w="40%">
					<Logo w={10} h={10} />
					<Search display={["none", null, "flex"]} />
				</HStack>
				<HStack gap={4} alignItems="center" display={["none", null, "flex"]}>
					{["DAOs", "Gates", "People", "Join Discord"].map((s) => (
						<Text key={s}>{s}</Text>
					))}
					<Button variant="outline" p={2}>
						<IoNotifications />
					</Button>
				</HStack>
			</HStack>
		</Box>
	);
});

export default Menu;
