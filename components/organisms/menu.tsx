import { Box } from "@chakra-ui/react";

import Logo from "@/components/atoms/icons/logo";

function Menu() {
	return (
		<Box as="nav">
			<Logo w={10} h={10} />
		</Box>
	);
}

export default Menu;
