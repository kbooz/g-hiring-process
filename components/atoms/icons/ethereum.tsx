import { Icon, IconProps } from "@chakra-ui/react";

export function Ethereum(props: IconProps) {
	return (
		<Icon
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 23 37"
			{...props}
		>
			<path
				fill="#8A92B2"
				d="m11.496 0-.25.843v24.46l.25.247 11.497-6.711L11.497 0Z"
			/>
			<path fill="#62688F" d="M11.497 0 0 18.839l11.497 6.711V0Z" />
			<path
				fill="#8A92B2"
				d="m11.496 27.7-.141.17v8.713l.141.409 11.504-16L11.496 27.7Z"
			/>
			<path fill="#62688F" d="M11.497 36.992V27.7L0 20.992l11.497 16Z" />
			<path fill="#62688F" d="m11.497 25.55 11.496-6.711-11.496-5.16V25.55Z" />
			<path fill="#454A75" d="m0 18.839 11.496 6.711V13.678L0 18.84Z" />
		</Icon>
	);
}
