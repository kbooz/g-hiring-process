import { Icon, type IconProps, useToken } from "@chakra-ui/react";

function Logo(props: IconProps) {
	const [blue, pink, purple] = useToken("colors", [
		"brand.blue.500",
		"brand.pink.500",
		"brand.purple.500",
	]);
	return (
		<Icon viewBox="0 0 43 42" {...props}>
			<path fill={blue} d="M21 0a21 21 0 0 0 0 42V0Z" />
			<path fill={pink} d="M24.2 0h1.4c9.278 0 16.8 7.522 16.8 16.8L24.2 0Z" />
			<path fill={purple} d="M24.2 27.015h18.2V42H24.2V27.015Z" />
			<path
				fill={purple}
				d="M42.4 27.015c0 4.868-4.074 8.815-9.1 8.815s-9.1-3.947-9.1-8.815c0-4.869 4.074-8.815 9.1-8.815s9.1 3.947 9.1 8.815Z"
			/>
		</Icon>
	);
}
export default Logo;
