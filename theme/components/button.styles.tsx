import { type CSSWithMultiValues } from "@chakra-ui/react";

import { ChakraStylesheet } from "@/types/chakra";

import colors from "../colors";
import gradients from "../shared/gradients";

/* Styles */
export const outline: ChakraStylesheet = {
	border: "1px",
	borderColor: "whiteAlpha.200",
};
// ref: https://codesandbox.io/s/chakra-ui-theme-extension-w5u2n?file=/src/theme/Button/index.js
export const outlineHover: CSSWithMultiValues = {
	boxShadow: "main",
	borderColor: "transparent",
	background: `linear-gradient(${colors.brand.purple["900"]}, ${colors.brand.purple["900"]}) padding-box, linear-gradient(${gradients.button}) border-box`,
};
export const inline: ChakraStylesheet = {
	fontFamily: "body",
	fontWeight: "normal",
	verticalAlign: "baseline",
	textTransform: "none",
	paddingBottom: 2,
	paddingTop: 1,
};
