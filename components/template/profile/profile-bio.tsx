import Link from "next/link";

import { Box, Button, HStack, Icon, Text } from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { useCopyToClipboard } from "react-use";

import { Ethereum } from "@/components/atoms/icons/ethereum";
import { CopyButton } from "@/components/molecules/copy-button";
import { Profile } from "@/types/profile";
import { socialIcons } from "@/utils/icon";
import { shortenWalletAddress } from "@/utils/text";

export function ProfileBio({ profile }: { profile: Profile }) {
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
		<Box as="section" layerStyle="profileSection" pt={0}>
			<HStack justifyContent="space-between" alignItems="start">
				<Box>
					<Text textStyle="sectionTitle" fontSize={36}>
						{profile.name}
					</Text>
					<Text textStyle="secondaryGradient" lineHeight="1">
						{profile.username}
					</Text>
				</Box>
				<HStack>
					<Text>
						<Icon w="1rem" h="1rem" as={Ethereum} verticalAlign="baseline" />{" "}
						{shortenWalletAddress(profile.address, 4, 5)}
					</Text>
					<CopyButton text={profile.address} />
					<Button variant="outline-icon" p={2} minW={0} height="auto">
						<Icon w=".75rem" h=".75rem" as={FaPen} />
					</Button>
				</HStack>
			</HStack>
			<Text whiteSpace="pre-line" mt={5} color="whiteAlpha.600">
				{profile.bio}
			</Text>
			<Link passHref href={profile.url}>
				<Text as="a" mt={7} display="block">
					{profile.url}
				</Text>
			</Link>
			<HStack mt={7}>
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
							{icon && <Icon w="1rem" h="1rem" as={socialIcons[icon].icon} />}
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
	);
}
