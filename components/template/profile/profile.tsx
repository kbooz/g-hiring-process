import { Box, HStack, Image, VStack } from "@chakra-ui/react";

import { MotionBox } from "@/components/atoms/motion";
import { Profile } from "@/types/profile";

import { ProfileAbout } from "./profile-about";
import { ProfileBio } from "./profile-bio";
import { ProfileExperiences } from "./profile-experiences";
import { ProfileSidebar } from "./profile-sidebar";
import { ProfileContext } from "./profile.context";

export function ProfileTemplate({ profile }: { profile: Profile }) {
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
				<VStack alignItems="stretch" spacing="0" width="full">
					<ProfileBio />
					<ProfileAbout />
					<ProfileExperiences />
				</VStack>
				<ProfileSidebar />
			</MotionBox>
		</ProfileContext.Provider>
	);
}
