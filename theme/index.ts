import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import * as components from "./components";
import fonts from "./fonts";
import globalStyles from "./global-styles";
import layerStyles from "./layer-styles";
import shadows from "./shadows";
import textStyles from "./text-styles";

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const theme = extendTheme({
	config,
	colors,
	fonts,
	components: {
		...components,
	},
	shadows,
	styles: globalStyles,
	textStyles,
	layerStyles,
});

export default theme;
