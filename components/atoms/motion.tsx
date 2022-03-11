import {
	Box,
	ButtonGroup,
	Text,
	type ButtonGroupProps,
	type BoxProps,
	type TextProps,
} from "@chakra-ui/react";
import { CustomDomComponent, motion } from "framer-motion";

/* Fix for conflicting transition */
type RemoveFromBase<T> = Omit<T, "transition">;
type MotionChakra<T> = CustomDomComponent<RemoveFromBase<T>>;

export const MotionButtonGroup: MotionChakra<ButtonGroupProps> =
	motion(ButtonGroup);
export const MotionBox: MotionChakra<BoxProps> = motion(Box);
export const MotionText: MotionChakra<TextProps> = motion(Text);
