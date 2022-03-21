import {
	Avatar,
	Box,
	Button,
	Flex,
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

type Props = {
	experience: ProfileExperience;
};

export function ExperienceSeciton({ experience }: Props) {
	const margin = 5;
	const { id, dao, description, role, start, end, period, workProof } =
		experience;
	return (
		<Box alignItems="stretch" pl={margin}>
			<Flex ml={-margin} alignItems="center" justifyContent="space-between">
				<Flex alignItems="center" gap={2}>
					<Avatar rounded="full" w={10} h={10} src={dao.image} />
					<Text fontSize="xl" textStyle="sectionTitle">
						{role}
					</Text>
				</Flex>
				<IconButton
					variant="outline-icon"
					size="xs"
					icon={<GateIcon type="edit" w=".75rem" h=".75rem" />}
					aria-label={`edit your experience at ${dao.name}`}
				/>
			</Flex>
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
					key={id + proof.title}
					margin={margin}
					isLast={i === workProof.length - 1}
					experience={experience}
					proof={proof}
				/>
			))}
		</Box>
	);
}
