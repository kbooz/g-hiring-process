import Color from "color";

import themeColors from "./colors";

const shadows = {
	main: `0px 6px 15px ${Color(themeColors.brand.pink["500"])
		.alpha(0.3)
		.string()}`,
};

export default shadows;
