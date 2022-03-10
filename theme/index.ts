import { extendTheme } from "@chakra-ui/react";

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const colors = {
	brand: {
		red: {
			200: "#EE787B",
		},
		blue: {
			500: "#0075FF",
			600: "#495BE0",
		},
		pink: {
			400: "#E153F2",
			500: "#FE02B9",
		},
		purple: {
			400: "#6A39F3",
			500: "#7E3BDC",
			900: "#170627",
		},
	},
};

const styles = {
	global: {
		body: {
			bg: "brand.purple.900",
		},
	},
};

const textStyles = {
	bg: {
		d: "inline-block",
		fontSize: ["48px", "72px"],
		bgGradient:
			"linear(to-r, brand.red.200, brand.pink.400, brand.blue.600, brand.purple.400)",
		bgClip: "text",
	},
};

const theme = extendTheme({ config, colors, styles, textStyles });

export default theme;
