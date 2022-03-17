import {
	Box,
	Button,
	HStack,
	Icon,
	IconButton,
	Image,
	Img,
	Text,
	VStack,
} from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";

import { CropText } from "@/components/atoms/crop-text";
import { GateIcon } from "@/components/atoms/icons";
import { ProfileExperience } from "@/types/profile";

import { WorkProof } from "./work-proof";

export function ExperienceSeciton({
	dao,
	description,
	role,
	start,
	end,
	period,
	workProof,
}: ProfileExperience) {
	const margin = 5;
	return (
		<Box alignItems="stretch" pl={margin}>
			<HStack ml={-margin} alignItems="center" justifyContent="space-between">
				<HStack alignItems="center">
					<Img rounded="full" w={10} h={10} src={dao.image} />
					<Text fontSize="xl" textStyle="sectionTitle">
						{role}
					</Text>
				</HStack>
				<IconButton
					variant="outline-icon"
					size="sm"
					icon={<GateIcon type="edit" w=".75rem" h=".75rem" />}
					aria-label={`edit your experience at ${dao.name}`}
				/>
			</HStack>
			<Box
				pl={margin + 2}
				borderLeft="1px"
				borderLeftColor="whiteAlpha.200"
				pt={1}
				pb={12}
			>
				<Text>{dao.name}</Text>
				<Text color="whiteAlpha.600">
					{start} — {end ?? "Present"} • {period}
				</Text>
				<CropText mt={7}>{description}</CropText>
			</Box>
			{workProof?.map((proof, i) => (
				<WorkProof
					key={proof.title}
					margin={margin}
					isLast={i === workProof.length - 1}
					{...proof}
				/>
			))}
		</Box>
	);
}
