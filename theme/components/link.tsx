import { ComponentStyleConfig } from "@chakra-ui/react";

// All parts of multipart components can be found in the @chakra-ui/anatomy package,
export const Link: ComponentStyleConfig = {
	variants: {
		default: {},
		underline: {
			position: "relative",

			_after: {
				content: `""`,
				position: "absolute",
				bottom: 0,
				left: 0,
				right: 0,
				height: "1px",
				backgroundColor: "whiteAlpha.500",
				transition: "transform 0.2s ease",
				transformOrigin: "center center",
				transform: "scaleX(0)",
			},
			_hover: {
				textDecoration: "none",
				_after: {
					transform: "scaleX(1)",
				},
			},
			_focus: {
				textDecoration: "none",
				_after: {
					transform: "scaleX(1)",
				},
			},
		},
	},
	defaultProps: {
		variant: "default",
	},
};
