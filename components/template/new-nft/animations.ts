import type { Variants, Transition } from "framer-motion";

export const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
		},
	},
};
const transition: Transition = { ease: "easeOut", duration: 0.8 };

export const textAnimation: Variants = {
	hidden: { y: 20 },
	show: {
		y: 0,
		transition,
	},
};

export const cardAnimation: Variants = {
	hidden: { scale: 0, opacity: 0 },
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			type: "spring",
			duration: 2,
		},
	},
};

export const buttonsAnimation: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition,
	},
};
