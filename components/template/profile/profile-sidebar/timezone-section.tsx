import {
	Box,
	Button,
	Flex,
	Icon,
	IconButton,
	Spacer,
	Text,
} from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";

import { GateIcon } from "@/components/atoms/icons";

export function TimeZoneSection() {
	return (
		<Box as="section" layerStyle="profileSection" pt={0}>
			<Flex align="center">
				<Text fontSize="xs" color="whiteAlpha.600">
					Time Zone
				</Text>
				<Spacer />
				<IconButton
					variant="outline-icon"
					size="xs"
					icon={<GateIcon type="location" />}
					aria-label="change your time zone"
				/>
			</Flex>

			<Icon
				w="16"
				h="16"
				as={HiLocationMarker}
				textStyle="primaryGradient"
				fill="red"
			/>
			<Text>10:21 am</Text>
			<Text>Los Angeles, CA, USA</Text>
			<Text>PDT (UTC-7)</Text>
		</Box>
	);
}
