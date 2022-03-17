import { Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { useToggle } from "react-use";

import { GateIcon } from "@/components/atoms/icons";
import { MotionBox, MotionCenter, MotionFlex } from "@/components/atoms/motion";
import NFTBadge from "@/components/molecules/nft-badge";
import type { WorkProof as WorkProofI } from "@/types/profile";

type Props = {
	margin: number;
	isLast?: boolean;
} & WorkProofI;

export function WorkProof({ title, margin, type, isLast, nfts }: Props) {
	const [isOpen, toggleOpen] = useToggle(true);
	return (
		<MotionBox
			position="relative"
			animate={isOpen ? "open" : "closed"}
			_before={{
				content: "''",
				display: "block",
				background: "whiteAlpha.200",
				width: "1px",
				height: isLast ? "calc(1rem + 1px)" : "full",
				left: 0,
				top: 0,
				position: "absolute",
			}}
			pb={4}
		>
			<HStack
				justifyContent="space-between"
				ml={margin}
				_before={{
					content: "''",
					display: "block",
					background: "whiteAlpha.300",
					width: 1,
					height: 1,
					left: "-1.5px",
					borderRadius: "full",
					position: "absolute",
				}}
			>
				<Button
					variant="chevron"
					onClick={toggleOpen}
					ml={-2}
					rightIcon={
						<MotionCenter
							ml={2}
							transition={{ type: "tween" }}
							variants={{
								open: { rotate: 0 },
								closed: { rotate: 180 },
							}}
						>
							<GateIcon type="chevron-down" />
						</MotionCenter>
					}
				>
					{title}
				</Button>
				{nfts.length > 3 && <Button variant="inline">See All</Button>}
			</HStack>
			<MotionFlex
				transition={{ type: "tween" }}
				variants={{
					open: { height: "auto", opacity: 1 },
					closed: { height: 0, opacity: 0 },
				}}
				overflowY="hidden"
				overflowX={{ base: "visible", md: "hidden" }}
				direction="row"
				gap={3}
				ml={{ base: 0, md: margin }}
				py={6}
				px={{ base: margin, md: 0 }}
				align="flex-start"
				wrap={{ base: "nowrap", md: "wrap" }}
				width={{ base: `calc(100% + 1rem)`, md: "100%" }}
				scrollSnapType="x mandatory"
				scrollSnapAlign="start"
			>
				{nfts.map((nft) => (
					<NFTBadge
						key={nft.name}
						w={200}
						isSmall
						{...nft}
						minW={{ base: 200, md: "auto" }}
					/>
				))}
			</MotionFlex>
		</MotionBox>
	);
}
