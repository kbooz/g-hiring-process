import NextLink from "next/link";

import {
	Box,
	Button,
	HStack,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Stack,
	Text,
	Link,
	IconButton,
	forwardRef,
	StackProps,
	Flex,
} from "@chakra-ui/react";
import { useCopyToClipboard } from "react-use";

import { GateIcon } from "@/components/atoms/icons";
import { CopyButton } from "@/components/molecules/copy-button";
import { shortenWalletAddress } from "@/utils/text";
import { prependProtocol } from "@/utils/url";

import { useProfile } from "./profile.context";
import { socialIcons } from "./utils";

export const ProfileBio = forwardRef<StackProps, "div">(function ProfileBio(
	_props,
	ref
) {
	const { avatar, name, username, address, bio, url, links } = useProfile();
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
		<Flex
			direction={["column", null, "row"]}
			as="section"
			layerStyle="profileSection"
			pt={0}
			width="full"
			gap={6}
			ref={ref}
		>
			<Image
				display={{ base: "block", lg: "none" }}
				w="full"
				maxW={210}
				sx={{ aspectRatio: "210/260" }}
				borderRadius="3xl"
				background="blue.500"
				src={avatar}
			/>
			<Box width="full">
				<Flex
					direction={{ base: "column", md: "row" }}
					justify="space-between"
					align="flex-start"
					gap={4}
				>
					<Box>
						<Text textStyle="sectionTitle" fontSize={36} lineHeight="1" mb={3}>
							{name}
						</Text>
						<Text
							textStyle="secondaryGradient"
							fontWeight="semibold"
							lineHeight="1"
						>
							{username}
						</Text>
					</Box>
					<Flex gap={3} align="center">
						<Text>
							<GateIcon type="ethereum" verticalAlign="baseline" />{" "}
							{shortenWalletAddress(address, 4, 5)}
						</Text>
						<CopyButton text={address} />
						<Menu>
							<MenuButton
								as={IconButton}
								type="button"
								size="xs"
								variant="outline-icon"
								icon={<GateIcon type="edit" w=".75rem" h=".75rem" />}
								aria-label="open profile menu"
							/>
							<MenuList>
								<MenuItem>Edit Profile</MenuItem>
								<MenuItem>Manage Wallets</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>
				<Text whiteSpace="pre-line" mt={5} color="whiteAlpha.600">
					{bio}
				</Text>
				<NextLink passHref href={prependProtocol(url)}>
					<Link
						target="_blank"
						mt={7}
						display="inline-block"
						variant="underline"
					>
						{url}
					</Link>
				</NextLink>
				<Flex
					gap={2}
					mt={7}
					justify={{ base: "space-between", md: "flex-start" }}
				>
					{links.map(({ href, icon }) => (
						<NextLink key={icon} href={href} passHref>
							<IconButton
								as={Link}
								target="_blank"
								rel="noopener noreferrer"
								variant="outline-icon"
								icon={icon && <GateIcon type={socialIcons[icon].icon} />}
								aria-label={icon ? socialIcons[icon].name : ""}
							/>
						</NextLink>
					))}
					<IconButton
						type="button"
						variant="outline-icon"
						onClick={onShareLink}
						icon={<GateIcon type="share" />}
						aria-label="share profile"
					/>
				</Flex>
			</Box>
		</Flex>
	);
});
