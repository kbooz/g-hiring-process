import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import { Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useToggle } from "react-use";

import { GateIcon } from "@/components/atoms/icons";
import { MotionBox, MotionCenter, MotionFlex } from "@/components/atoms/motion";
import NFTBadge from "@/components/molecules/nft-badge";
import type {
	ProfileExperience,
	WorkProof as WorkProofI,
} from "@/types/profile";

import { useNewNFTRouteChange } from "./utils";

type Props = {
	margin: number;
	isLast?: boolean;
	experience: ProfileExperience;
	proof: WorkProofI;
};

const duration = 0.85;

export function WorkProof({ margin, isLast, proof }: Props) {
	const { nfts, title } = proof;
	const [isOpen, toggleOpen] = useToggle(true);
	const sectionRef = useRef<HTMLElement>(null);

	/* Enables overflow on the current section */
	const [hasNewNFT, newNFTId] = useNewNFTRouteChange(nfts, duration);

	useEffect(() => {
		if (hasNewNFT) {
			sectionRef.current?.scrollIntoView({ behavior: "smooth" });
		}
	}, [hasNewNFT]);

	return (
		<MotionBox
			ref={sectionRef}
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
			<MotionBox
				transition={{ type: "tween" }}
				variants={{
					open: { height: "auto", opacity: 1 },
					closed: { height: 0, opacity: 0 },
				}}
				ml={{ base: 0, md: margin }}
				width={{ base: `calc(100% + 1rem)`, md: "100%" }}
				{...(!hasNewNFT && {
					overflowY: "hidden",
					overflowX: { base: "visible", md: "hidden" },
				})}
			>
				<MotionFlex
					direction="row"
					gap={3}
					py={6}
					px={{ base: margin, md: 0 }}
					align="flex-start"
					wrap={{ base: "nowrap", md: "wrap" }}
					scrollSnapType="x mandatory"
					scrollSnapAlign="start"
					{...(!hasNewNFT && {
						overflowX: { base: "auto", md: "hidden" },
					})}
				>
					<AnimatePresence>
						{nfts.slice(0, 3).map((nft) => (
							<NFTBadge
								key={nft.id}
								{...(newNFTId === nft.id && {
									layoutId: `animated-${nft.id}`,
									animate: {
										opacity: 1,
										transition: {
											duration: 10,
										},
									},
									exit: { opacity: 0 },
									transition: {
										duration,
									},
								})}
								isSmall
								w={200}
								minW={{ base: 200, md: "auto" }}
								{...nft}
							/>
						))}
					</AnimatePresence>
				</MotionFlex>
			</MotionBox>
		</MotionBox>
	);
}
