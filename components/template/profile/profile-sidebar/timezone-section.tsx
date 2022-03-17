import {
	Box,
	Flex,
	FlexProps,
	Icon,
	IconButton,
	Spacer,
	Text,
} from "@chakra-ui/react";
import { BsSun } from "react-icons/bs";

import { GateIcon } from "@/components/atoms/icons";
import { SvgGradient } from "@/components/atoms/svg-gradient";

export function TimeZoneSection(props: FlexProps) {
	return (
		<Box as="section" layerStyle="profileSection" pt={0}>
			<Flex direction="column" justify="space-between" {...props}>
				<Flex align="center" mb={10}>
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
				<Box>
					<Box mb={4}>
						<SvgGradient id="gradient-1" />
						<Icon
							fontSize="7xl"
							as={BsSun}
							textStyle="primaryGradient"
							fill="url(#gradient-1)"
						/>
					</Box>
					<Text fontWeight="400" fontSize="4xl">
						10:21 am
					</Text>
					<Text fontWeight="bold" fontSize="sm" textTransform="uppercase">
						Los Angeles, CA, USA
					</Text>
					<Text fontSize="xs" textTransform="uppercase" color="whiteAlpha.500">
						PDT (UTC-7)
					</Text>
				</Box>
			</Flex>
		</Box>
	);
}
