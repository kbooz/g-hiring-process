import { Box } from "@chakra-ui/react";

import Logo from "@/components/atoms/icons/logo";

import Search from "../molecules/search";

function Menu() {
	return (
		<Box as="nav" px={6}>
			<Box
				py={4}
				justifyContent="space-between"
				borderBottom="1px"
				borderBottomColor="whiteAlpha.100"
			>
				<Box d="flex" flexFlow="row" gap={4} alignItems="center">
					<Logo w={10} h={10} />
					<Search />
				</Box>
			</Box>
		</Box>
	);
}

export default Menu;
