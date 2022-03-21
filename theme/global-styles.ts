const globalStyles = {
	global: {
		"html, body, #__next": {
			height: "100%",
		},
		body: {
			bg: "brand.purple.900",
			letterSpacing: "0.05em",
			fontWeight: "400",
			scrollBehavior: "smooth",
		},
		/* Fix for popup button rendering extra height when child is an Icon/SVG */
		'[aria-haspopup="menu"] > span:first-of-type': {
			display: "contents",
		},
	},
};

export default globalStyles;
