import { type CSSWithMultiValues } from "@chakra-ui/react";
import type { ComponentStyleConfig } from "@chakra-ui/theme";

import { ChakraStylesheet } from "@/types/chakra";

import colors from "../colors";
import gradients from "../reusables/gradients";

const outline: ChakraStylesheet = {
	height: "auto",
	border: "1px",
	borderColor: "whiteAlpha.200",
};

// ref: https://codesandbox.io/s/chakra-ui-theme-extension-w5u2n?file=/src/theme/Button/index.js
const outlineHover: CSSWithMultiValues = {
	boxShadow: "main",
	borderColor: "transparent",
	background: `linear-gradient(${colors.brand.purple["900"]}, ${colors.brand.purple["900"]}) padding-box, linear-gradient(${gradients.button}) border-box`,
};

// https://chakra-ui.com/docs/styled-system/theming/component-style#styling-single-part-components
export const Button: ComponentStyleConfig = {
	baseStyle: {
		fontFamily: "heading",
		fontWeight: "bold",
		textTransform: "uppercase",
		borderRadius: "3xl",
		transitionDuration: "0.2s",
		transitionProperty: "box-shadow background border-color color",
	},
	variants: {
		outline: {
			py: 2,
			px: 4,
			...outline,
			_hover: outlineHover,
			_focus: outlineHover,
		},
		"outline-icon": {
			...outline,
			_hover: outlineHover,
			_focus: outlineHover,
			_active: {
				background: "white",
				borderColor: "transparent",
				color: "brand.purple.900",
			},
		},
		inline: {
			fontFamily: "body",
			fontWeight: "normal",
			background: `linear-gradient(${gradients.inline})`,
			backgroundClip: "text",
			verticalAlign: "baseline",
			textTransform: "none",
			height: "auto",
			paddingBottom: 2,
			paddingTop: 1,
			textShadow: `0px 0px 2px linear-gradient(${gradients.inline})`,

			_hover: {
				color: "white",
				textShadow: `0px 0px 2px linear-gradient(${gradients.inline})`,
			},
			_focus: {
				color: "white",
				textShadow: `0px 0px 2px linear-gradient(${gradients.inline})`,
			},
			_active: {
				background: "white",
				borderColor: "transparent",
				color: "brand.purple.900",
			},
		},
	},
	defaultProps: {
		variant: "outline",
	},
};
