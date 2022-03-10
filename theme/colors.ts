import { makeOpacity } from "./utils";

const colors = {
	/* Overloads */
	whiteAlpha: makeOpacity("255, 255, 255"),

	/* Custom */
	brand: {
		gray: {
			200: "#E5E5E5",
			700: "#A5A5A5",
		},
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

export default colors;
