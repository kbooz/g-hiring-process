import { useMemo, useState } from "react";

import { Button, Text } from "@chakra-ui/react";

type Props = {
	children: string;
	type?: "paragraph" | "percentage";
	shownPercentage?: number;
	splitParagraph?: string;
};

export function CropText({
	children,
	type = "paragraph",
	shownPercentage = 0.4,
	splitParagraph = "\\n",
}: Props) {
	const [isOpen, setIsOpen] = useState(() => {
		if (type === "percentage") return false;
		return !children.includes("\\n");
	});

	const onShow = () => setIsOpen(true);

	const subtext = useMemo(() => {
		if (isOpen) return children.replace("\\n", "\n");
		if (type === "percentage")
			return children.slice(0, Math.floor(children.length * shownPercentage));
		return children.split(splitParagraph)[0];
	}, [isOpen, children, type, shownPercentage, splitParagraph]);
	return (
		<Text whiteSpace="pre-line">
			{subtext}
			{!isOpen && (
				<Button type="button" variant="inline" ml={2} onClick={onShow}>
					See more
				</Button>
			)}
		</Text>
	);
}
