import { ComponentStyleConfig } from "@chakra-ui/react";

// All parts of multipart components can be found in the @chakra-ui/anatomy package,
export const Menu: ComponentStyleConfig = {
	parts: ["list", "item"],
	baseStyle: {
		list: {
			bg: "white",
			color: "brand.purple.900",
			py: 4,
		},
		item: {
			_focus: { bg: "gray.200" },
		},
	},
};
