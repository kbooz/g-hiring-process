import Link from "next/link";

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
	IconButton,
	Flex,
	Spacer,
	Show,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { AiFillCaretDown } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";

import { GateIcon } from "@/components/atoms/icons/";
import { shortenWalletAddress } from "@/utils/text";

import Search from "../molecules/search";

const Manu = forwardRef<BoxProps, "nav">(function Manu(props, ref) {
	return (
		<Flex
			as="nav"
			direction="row"
			ref={ref}
			py={4}
			gap={4}
			align="center"
			borderBottom="1px"
			borderBottomColor="whiteAlpha.100"
			position="relative"
			zIndex={10}
			{...props}
		>
			<Link href="/" passHref>
				<a>
					<GateIcon type="logo" w={10} h={10} />
				</a>
			</Link>
			<Search display={{ md: "flex", sm: "none" }} maxWidth={{ lg: "30ch" }} />
			<Spacer />
			<Show above="md">
				<Flex direction="row" gap={4} align="center">
					{["DAOs", "Gates", "People", "Join Discord"].map((s) => (
						<Text key={s}>{s}</Text>
					))}

					<IconButton
						variant="outline-icon"
						aria-label="open notifications"
						icon={<GateIcon type="bell" />}
					/>

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
				</Flex>
			</Show>
		</Flex>
	);
});

export default Manu;
