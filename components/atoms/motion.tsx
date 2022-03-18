import {
	Box,
	ButtonGroup,
	Text,
	type ButtonGroupProps,
	type BoxProps,
	type TextProps,
	HStack,
	type StackProps,
	VStack,
	Stack,
	type IconProps,
	Icon,
	Center,
	Flex,
	type FlexProps,
} from "@chakra-ui/react";
import { CustomDomComponent, motion, MotionProps } from "framer-motion";

/* Fix for conflicting "transition" prop */
type RemoveFromBase<T> = Omit<T, "transition">;
type MotionChakra<T> = CustomDomComponent<RemoveFromBase<T>>;

/* Generates */
type MotionChakraProps<T> = React.PropsWithoutRef<T & MotionProps> &
	React.RefAttributes<SVGElement | HTMLElement>;

export const MotionIcon: MotionChakra<IconProps> = motion(Icon);

export const MotionButtonGroup: MotionChakra<ButtonGroupProps> =
	motion(ButtonGroup);

export const MotionBox: MotionChakra<BoxProps> = motion(Box);
export type MotionBoxProps = MotionChakraProps<BoxProps>;
export const MotionCenter: MotionChakra<BoxProps> = motion(Center);

export const MotionFlex: MotionChakra<FlexProps> = motion(Flex);

export const MotionStack: MotionChakra<StackProps> = motion(Stack);
export const MotionHStack: MotionChakra<StackProps> = motion(HStack);
export const MotionVStack: MotionChakra<StackProps> = motion(VStack);

export const MotionText: MotionChakra<TextProps> = motion(Text);
