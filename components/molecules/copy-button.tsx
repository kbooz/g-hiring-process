import { Button, ButtonProps, Icon, useToast } from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";
import { useCopyToClipboard } from "react-use";

type Props = { text: string } & Partial<ButtonProps>;

export function CopyButton({ text, ...props }: Props) {
	const [status, copyToClipboard] = useCopyToClipboard();
	const toast = useToast();

	const onClick = () => {
		copyToClipboard(text);
		toast({
			title: "Address copied",
			description: "The address has been copied to your clipboard.",
			status: "success",
		});
	};

	return (
		<Button variant="outline-icon" onClick={onClick} {...props}>
			<Icon w=".75rem" h=".75rem" transform="rotate(180deg)" as={FiCopy} />
		</Button>
	);
}
