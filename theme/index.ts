import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import * as components from "./components";
import globalStyles from "./global-styles";
import shadows from "./shadows";
import textStyles from "./text-styles";

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const theme = extendTheme({
	config,
	colors,
	styles: globalStyles,
	textStyles,
	components: {
		...components,
	},
	shadows,
});

export default theme;
