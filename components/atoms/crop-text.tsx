import { useMemo, useState } from "react";

import { Text, TextProps, Button } from "@chakra-ui/react";

type Props = {
	children: string;
	type?: "paragraph" | "percentage";
	shownPercentage?: number;
	splitParagraph?: string;
} & Partial<TextProps>;

export function CropText({
	children,
	type = "paragraph",
	shownPercentage = 0.4,
	splitParagraph = "\n",
	...props
}: Props) {
	const [isOpen, setIsOpen] = useState(() => {
		if (type === "percentage") return false;
		return !children.includes("\n");
	});

	const onShow = () => setIsOpen(true);

	const subtext = useMemo(() => {
		if (isOpen) return children.replace("\\n", "\n");
		if (type === "percentage")
			return children.slice(0, Math.floor(children.length * shownPercentage));
		return children.split(splitParagraph)[0];
	}, [isOpen, children, type, shownPercentage, splitParagraph]);

	return (
		<Text animate={{ height: "auto" }} whiteSpace="pre-line" {...props}>
			{subtext}
			{!isOpen && (
				<Button
					type="button"
					variant="inline-gradient"
					ml={1}
					onClick={onShow}
					mt={-2}
				>
					See more
				</Button>
			)}
		</Text>
	);
}
