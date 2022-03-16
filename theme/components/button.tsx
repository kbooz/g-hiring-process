import type { ComponentStyleConfig } from "@chakra-ui/theme";

import gradients from "../reusables/gradients";
import { outline, outlineHover, inline } from "./button.styles";

// https://chakra-ui.com/docs/styled-system/theming/component-style#styling-single-part-components
export const Button: ComponentStyleConfig = {
	baseStyle: {
		fontFamily: "heading",
		fontWeight: "bold",
		textTransform: "uppercase",
		borderRadius: "3xl",
		transitionDuration: "0.2s",
		transitionProperty: "box-shadow background border-color color",
		letterSpacing: "0.05em",
	},
	variants: {
		outline: {
			py: 2,
			px: 4,
			...outline,
			_hover: outlineHover,
			_focus: outlineHover,
		},
		"outline-active": {
			py: 2,
			px: 4,
			...outline,
			...outlineHover,
		},
		"outline-icon": {
			...outline,
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			p: 2,
			height: 7,
			width: 7,
			_hover: outlineHover,
			_focus: outlineHover,
			_active: {
				background: "white",
				borderColor: "transparent",
				color: "brand.purple.900",
			},
		},
		chevron: {
			...inline,
			color: "white",
			fontWeight: "bold",
			textTransform: "uppercase",
			px: 2,
			_active: { background: "transparent", color: "white" },
		},
		inline: {
			...inline,
			color: "whiteAlpha.600",
			_hover: {
				color: "white",
			},
			_focus: {
				color: "white",
			},
			_active: {
				background: "white",
				borderColor: "transparent",
				color: "brand.purple.900",
			},
		},
		"inline-gradient": {
			...inline,
			background: `linear-gradient(${gradients.inline})`,
			backgroundClip: "text",

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
