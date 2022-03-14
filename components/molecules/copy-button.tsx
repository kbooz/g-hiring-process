import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";
import { useCopyToClipboard } from "react-use";

type Props = { text: string } & Partial<ButtonProps>;

export function CopyButton({ text, ...props }: Props) {
	const [status, copyToClipboard] = useCopyToClipboard();

	const onClick = () => {
		copyToClipboard(text);
	};

	return (
		<Button
			variant="outline-icon"
			p={2}
			minW={0}
			height="auto"
			onClick={onClick}
			{...props}
		>
			<Icon w=".75rem" h=".75rem" transform="rotate(180deg)" as={FiCopy} />
		</Button>
	);
}
