import {
	Box,
	type BoxProps,
	Button,
	forwardRef,
	HStack,
	Text,
	Icon,
	Menu as ChakraMenu,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";

import { GateIcon } from "@/components/atoms/icons/";
import { shortenWalletAddress } from "@/utils/text";

import Search from "../molecules/search";

const Manu = forwardRef<BoxProps, "nav">(function Manu(props, ref) {
	return (
		<Box as="nav" px={6} ref={ref} position="relative" zIndex={10} {...props}>
			<HStack
				py={4}
				justifyContent="space-between"
				borderBottom="1px"
				borderBottomColor="whiteAlpha.100"
			>
				<HStack gap={4} alignItems="center" w="40%">
					<GateIcon type="logo" w={10} h={10} />
					<Search display={["none", null, "flex"]} />
				</HStack>
				<HStack gap={4} alignItems="center" display={["none", null, "flex"]}>
					{["DAOs", "Gates", "People", "Join Discord"].map((s) => (
						<Text key={s}>{s}</Text>
					))}
					<Button variant="outline-icon" p={2}>
						<GateIcon type="bell" height="1rem" width="1rem" />
					</Button>
					<ChakraMenu>
						<MenuButton
							as={Button}
							variant="outline-active"
							fontSize="sm"
							rightIcon={
								<GateIcon
									type="caret-down"
									width="0.75rem"
									height="0.75rem"
									color="brand.pink.500"
								/>
							}
						>
							{shortenWalletAddress("0x3212312312321321321")}
						</MenuButton>
						<MenuList>
							<MenuItem>Edit Profile</MenuItem>
							<MenuItem>Manage Wallets</MenuItem>
						</MenuList>
					</ChakraMenu>
				</HStack>
			</HStack>
		</Box>
	);
});

export default Manu;
