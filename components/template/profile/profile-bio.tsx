import NextLink from "next/link";

import {
	Box,
	Button,
	HStack,
	Icon,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Stack,
	Text,
	Link,
} from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { useCopyToClipboard } from "react-use";

import { Ethereum } from "@/components/atoms/icons/ethereum";
import { CopyButton } from "@/components/molecules/copy-button";
import { Profile } from "@/types/profile";
import { socialIcons } from "@/utils/icon";
import { shortenWalletAddress } from "@/utils/text";
import { prependProtocol } from "@/utils/url";

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
		<Stack
			direction={["column", null, "row"]}
			as="section"
			layerStyle="profileSection"
			pt={0}
			width="full"
			spacing={0}
			gap={6}
		>
			<Image
				display={["block", null, null, "none"]}
				w="full"
				maxW={210}
				sx={{ aspectRatio: "210/260" }}
				borderRadius="3xl"
				background="blue.500"
				src={profile.avatar}
			/>
			<Box width="full">
				<Stack
					direction={["column", null, "row"]}
					justifyContent="space-between"
					alignItems={"flex-start"}
				>
					<Box>
						<Text textStyle="sectionTitle" fontSize={36}>
							{profile.name}
						</Text>
						<Text
							textStyle="secondaryGradient"
							fontWeight="semibold"
							lineHeight="1"
						>
							{profile.username}
						</Text>
					</Box>
					<HStack>
						<Text>
							<Icon w="1rem" h="1rem" as={Ethereum} verticalAlign="baseline" />{" "}
							{shortenWalletAddress(profile.address, 4, 5)}
						</Text>
						<CopyButton text={profile.address} />
						<Menu>
							<MenuButton as={Button} variant="outline-icon">
								<Icon w=".75rem" h=".75rem" as={FaPen} />
							</MenuButton>
							<MenuList>
								<MenuItem>Edit Profile</MenuItem>
								<MenuItem>Manage Wallets</MenuItem>
							</MenuList>
						</Menu>
					</HStack>
				</Stack>
				<Text whiteSpace="pre-line" mt={5} color="whiteAlpha.600">
					{profile.bio}
				</Text>
				<NextLink passHref href={prependProtocol(profile.url)}>
					<Link target="_blank" mt={7} display="inline-block">
						{profile.url}
					</Link>
				</NextLink>
				<HStack mt={7}>
					{profile.links.map(({ href, icon }) => (
						<NextLink key={icon} href={href} passHref>
							<Button
								as={Link}
								target="_blank"
								rel="noopener noreferrer"
								variant="outline-icon"
								aria-label={icon ? socialIcons[icon].name : ""}
							>
								{icon && <Icon w="1rem" h="1rem" as={socialIcons[icon].icon} />}
							</Button>
						</NextLink>
					))}
					<Button
						type="button"
						variant="outline-icon"
						aria-label="Copy to share"
						onClick={onShareLink}
					>
						<Icon w="1rem" h="1rem" as={IoShareSocial} />
					</Button>
				</HStack>
			</Box>
		</Stack>
	);
}
