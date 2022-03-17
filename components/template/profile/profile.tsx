import { LegacyRef } from "react";

import { Flex, Image, VStack } from "@chakra-ui/react";
import { useMeasure } from "react-use";

import { MotionBox } from "@/components/atoms/motion";
import { Profile } from "@/types/profile";

import { ProfileAbout } from "./profile-about";
import { ProfileBio } from "./profile-bio";
import { ProfileExperiences } from "./profile-experiences";
import { ProfileSidebar } from "./profile-sidebar";
import { ProfileContext } from "./profile.context";

export function ProfileTemplate({ profile }: { profile: Profile }) {
	const [ref, { height }] = useMeasure<HTMLElement>();
	console.log(height);
	return (
		<ProfileContext.Provider value={profile}>
			<MotionBox
				as="main"
				py={8}
				px={6}
				display="flex"
				flexFlow="row"
				alignItems="flex-start"
				gap={8}
			>
				<Image
					display={["none", null, null, "block"]}
					w="full"
					maxW={210}
					sx={{ aspectRatio: "210/260" }}
					borderRadius="3xl"
					background="blue.500"
					position={["unset", null, "sticky"]}
					top={6}
					src={profile.avatar}
				/>
				<Flex direction="column" align="stretch">
					<ProfileBio ref={ref as LegacyRef<HTMLDivElement>} />
					<ProfileAbout />
					<ProfileExperiences />
				</Flex>
				<ProfileSidebar bioHeight={height} />
			</MotionBox>
		</ProfileContext.Provider>
	);
}
