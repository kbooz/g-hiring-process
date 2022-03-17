import { Box } from "@chakra-ui/react";

import { DAOSuggestionSection } from "./dao-suggestion-section";
import { FiltersSection } from "./filters-section";
import { LanguagesSection } from "./languages-section";
import { TimeZoneSection } from "./timezone-section";

type Props = {
	bioHeight?: number;
};

export function ProfileSidebar({ bioHeight }: Props) {
	return (
		<Box flex={1}>
			<TimeZoneSection minHeight={{ base: "auto", lg: bioHeight }} />
			<FiltersSection />
			<LanguagesSection />
			<DAOSuggestionSection />
		</Box>
	);
}
