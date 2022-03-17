import { Icon } from "@chakra-ui/react";

type Props = {
	id: string;
};

export function SvgGradient({ id }: Props) {
	return (
		<Icon
			width={0}
			height={0}
			position="absolute"
			aria-hidden="true"
			focusable="false"
		>
			<linearGradient id={id} x2=".5" y2="1">
				<stop offset="0%" stopColor="#EE787B" />
				<stop offset="20%" stopColor="#EE787B" />
				<stop offset="60%" stopColor="#E153F2" />
				<stop offset="80%" stopColor="#495BE0" />
				<stop offset="100%" stopColor="#6A39F3" />
			</linearGradient>
		</Icon>
	);
}
