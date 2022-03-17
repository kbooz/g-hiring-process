import { SystemStyleObjectRecord } from "@chakra-ui/react";

import gradients from "./shared/gradients";

const textStyles: SystemStyleObjectRecord = {
	primaryGradient: {
		bgGradient: `linear(${gradients.main})`,
		bgClip: "text",
	},
	secondaryGradient: {
		bgGradient: `linear(${gradients.inline})`,
		bgClip: "text",
	},
	sectionTitle: {
		letterSpacing: "initial",
		fontWeight: "bold",
	},
};

export default textStyles;
