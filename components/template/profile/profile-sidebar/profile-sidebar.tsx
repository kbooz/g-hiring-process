import { Box, BoxProps } from "@chakra-ui/react";

import { DAOSuggestionSection } from "./dao-suggestion-section";
import { FiltersSection } from "./filters-section";
import { LanguagesSection } from "./languages-section";
import { TimeZoneSection } from "./timezone-section";

type Props = {
	bioHeight?: number;
};

export function ProfileSidebar({ bioHeight, ...props }: Props & BoxProps) {
	return (
		<Box {...props}>
			<TimeZoneSection height={{ base: "none", md: bioHeight }} />
			<FiltersSection />
			<LanguagesSection />
			<DAOSuggestionSection />
		</Box>
	);
}
