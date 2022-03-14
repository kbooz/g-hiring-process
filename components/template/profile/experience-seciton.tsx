import {
	Box,
	Button,
	HStack,
	Icon,
	Image,
	Img,
	Text,
	VStack,
} from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";

import { CropText } from "@/components/atoms/crop-text";
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
	return (
		<VStack alignItems="stretch">
			<HStack alignItems="center" justifyContent="space-between">
				<HStack alignItems="center">
					<Img rounded="full" w={10} h={10} src={dao.image} />
					<Text>{role}</Text>
				</HStack>
				<Button variant="outline-icon" p={2} minW={0} height="auto">
					<Icon w=".75rem" h=".75rem" as={FaPen} />
				</Button>
			</HStack>
			<Text>{dao.name}</Text>
			<Text>
				{start} — {end ?? "Present"} • {period}
			</Text>
			<CropText>{description}</CropText>
			{workProof?.map((proof, i) => (
				<WorkProof
					key={proof.title}
					isLast={i === workProof.length - 1}
					{...proof}
				/>
			))}
		</VStack>
	);
}
