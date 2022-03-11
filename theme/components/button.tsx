import { type CSSWithMultiValues } from "@chakra-ui/react";
import type { ComponentStyleConfig } from "@chakra-ui/theme";

import { ChakraStylesheet } from "@/types/chakra";

import colors from "../colors";
import gradients from "../reusables/gradients";

// ref: https://codesandbox.io/s/chakra-ui-theme-extension-w5u2n?file=/src/theme/Button/index.js
const outlineVariant = (
	bgColor = colors.brand.purple["900"]
): ChakraStylesheet => {
	const outlineHover: CSSWithMultiValues = {
		boxShadow: "main",
		borderColor: "transparent",
		background: `linear-gradient(${bgColor}, ${bgColor}) padding-box, linear-gradient(${gradients.button}) border-box`,
	};
	return {
		border: "1px",
		borderColor: "brand.gray.700",
		transitionDuration: "0.2s",
		transitionProperty: "box-shadow background border-color",
		_active: {
			boxShadow: "main",
			borderColor: "transparent",
			background: `linear-gradient(${gradients.button})`,
		},
		_focus: outlineHover,
		_hover: outlineHover,
	};
};

// https://chakra-ui.com/docs/styled-system/theming/component-style#styling-single-part-components
export const Button: ComponentStyleConfig = {
	baseStyle: {
		fontWeight: "bold",
		textTransform: "uppercase",
		borderRadius: "3xl",
		py: 2,
		px: 4,
	},
	variants: {
		outline: ({ bgColor }) => ({
			...outlineVariant(bgColor),
		}),
		outlineIcon: ({ bgColor }) => ({
			...outlineVariant(bgColor),
		}),
	},
	defaultProps: {
		variant: "outline",
	},
};
