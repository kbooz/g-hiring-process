import {
	Box,
	type BoxProps,
	Button,
	forwardRef,
	HStack,
	Text,
	Icon,
} from "@chakra-ui/react";
import { IoNotifications } from "react-icons/io5";

import Logo from "@/components/atoms/icons/logo";
import { shortenWalletAddress } from "@/utils/text";

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
					<Button variant="outline-icon" p={2}>
						<Icon as={IoNotifications} height="1rem" width="1rem" />
					</Button>
					<Button>{shortenWalletAddress("0x3212312312321321321")}</Button>
				</HStack>
			</HStack>
		</Box>
	);
});

export default Menu;
