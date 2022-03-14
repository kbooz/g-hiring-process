import Link from "next/link";

import { Box, Button, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";
import { IoAdd, IoShareSocial } from "react-icons/io5";
import { useCopyToClipboard } from "react-use";

import { CropText } from "@/components/atoms/crop-text";
import { Ethereum } from "@/components/atoms/icons/ethereum";
import { MotionBox } from "@/components/atoms/motion";
import { CopyButton } from "@/components/molecules/copy-button";
import { Profile } from "@/types/profile";
import { socialIcons } from "@/utils/icon";
import { shortenWalletAddress } from "@/utils/text";

import { ExperienceSeciton } from "./experience-seciton";

export function ProfileTemplate({ profile }: { profile: Profile }) {
	const [_, copyToClipboard] = useCopyToClipboard();

	const onShareLink = async () => {
		try {
			await navigator?.share({
				title: "User Profile | Gateway",
				url: window?.location.href,
			});
		} catch (e) {
			copyToClipboard(window.location.href);
		}
	};
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
			<Box
				w="full"
				maxW={210}
				sx={{ aspectRatio: "210/260" }}
				borderRadius="3xl"
				background="blue.500"
				position={["unset", null, "sticky"]}
				top={6}
			/>
			<VStack alignItems="stretch">
				<Box as="section">
					<HStack justifyContent="space-between" alignItems="start">
						<Box>
							<Text>{profile.name}</Text>
							<Text>{profile.username}</Text>
						</Box>
						<HStack>
							<Text>
								<Icon
									w="1rem"
									h="1rem"
									as={Ethereum}
									verticalAlign="baseline"
								/>{" "}
								{shortenWalletAddress(profile.address, 4, 5)}
							</Text>
							<CopyButton text={profile.address} />
							<Button variant="outline-icon" p={2} minW={0} height="auto">
								<Icon w=".75rem" h=".75rem" as={FaPen} />
							</Button>
						</HStack>
					</HStack>
					<Box>
						<Text whiteSpace="pre-line">{profile.bio}</Text>
						<Link passHref href={profile.url}>
							<Text as="a">{profile.url}</Text>
						</Link>
						<HStack>
							{profile.links.map(({ href, icon }) => (
								<Link key={icon} href={href} passHref>
									<Button
										as="a"
										target="_blank"
										rel="noopener noreferrer"
										variant="outline-icon"
										minW={0}
										p={2}
										fontSize="xs"
										aria-label={icon ? socialIcons[icon].name : ""}
									>
										{icon && (
											<Icon w="1rem" h="1rem" as={socialIcons[icon].icon} />
										)}
									</Button>
								</Link>
							))}
							<Button
								type="button"
								variant="outline-icon"
								minW={0}
								p={2}
								fontSize="xs"
								aria-label="Copy to share"
								onClick={onShareLink}
							>
								<Icon w="1rem" h="1rem" as={IoShareSocial} />
							</Button>
						</HStack>
					</Box>
				</Box>
				<Box as="section">
					<HStack justifyContent="space-between">
						<Text>About</Text>
						<Button variant="outline-icon" p={2} minW={0} height="auto">
							<Icon w=".75rem" h=".75rem" as={FaPen} />
						</Button>
					</HStack>
					<CropText>{profile.about}</CropText>
				</Box>
				<Box as="section">
					<HStack justifyContent="space-between">
						<Text>Experience</Text>
						<Button variant="outline-icon" p={2} minW={0} height="auto">
							<Icon w=".75rem" h=".75rem" as={IoAdd} />
						</Button>
					</HStack>
					{profile.experience.map((experience) => (
						<ExperienceSeciton
							key={experience.role + experience.start}
							{...experience}
						/>
					))}
				</Box>
			</VStack>
		</MotionBox>
	);
}
