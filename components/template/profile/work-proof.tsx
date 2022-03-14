import { Box, Button, HStack, Icon, Text } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { useToggle } from "react-use";

import {
	MotionBox,
	MotionCenter,
	MotionHStack,
	MotionIcon,
} from "@/components/atoms/motion";
import NFTBadge from "@/components/molecules/nft-badge";
import type { WorkProof as WorkProofI } from "@/types/profile";

type Props = {
	isLast?: boolean;
} & WorkProofI;

export function WorkProof({ title, type, isLast, nfts }: Props) {
	const [isOpen, toggleOpen] = useToggle(true);
	return (
		<MotionBox animate={isOpen ? "open" : "closed"}>
			<HStack justifyContent="space-between">
				<Button onClick={toggleOpen}>
					{title}
					<MotionCenter
						ml={2}
						transition={{ type: "tween" }}
						variants={{
							open: { rotate: 0 },
							closed: { rotate: 180 },
						}}
					>
						<Icon as={FaChevronDown} />
					</MotionCenter>
				</Button>
				<Button variant="inline">See All</Button>
			</HStack>
			<MotionHStack
				transition={{ type: "tween" }}
				variants={{
					open: { height: "auto", opacity: 1 },
					closed: { height: 0, opacity: 0 },
				}}
				overflow="hidden"
			>
				{nfts.map((nft) => (
					<NFTBadge key={nft.name} w={200} small {...nft} />
				))}
			</MotionHStack>
		</MotionBox>
	);
}
