import { Box, HStack, Image, VStack } from "@chakra-ui/react";

import { MotionBox } from "@/components/atoms/motion";
import { Profile } from "@/types/profile";

import { ProfileAbout } from "./profile-about";
import { ProfileBio } from "./profile-bio";
import { ProfileExperiences } from "./profile-experiences";

export function ProfileTemplate({ profile }: { profile: Profile }) {
	return (
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
			<VStack alignItems="stretch" spacing="0">
				<HStack spacing="0" gap={6} alignItems="flex-start">
					<Image
						display={["block", null, null, "none"]}
						w="full"
						maxW={210}
						sx={{ aspectRatio: "210/260" }}
						borderRadius="3xl"
						background="blue.500"
						position={["unset", null, "sticky"]}
						top={6}
						src={profile.avatar}
					/>
					<ProfileBio profile={profile} />
				</HStack>
				<ProfileAbout about={profile.about}></ProfileAbout>
				<ProfileExperiences experiences={profile.experience} />
			</VStack>
		</MotionBox>
	);
}
