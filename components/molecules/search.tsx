import {
	Icon,
	Input,
	InputGroup,
	InputGroupProps,
	InputRightElement,
} from "@chakra-ui/react";

import { GateIcon } from "@/components/atoms/icons/";

function Search(props: InputGroupProps) {
	return (
		<InputGroup {...props}>
			<Input
				borderRadius="3xl"
				border="1px"
				pt={2}
				pb={3}
				placeholder="Search"
				focusBorderColor="white"
				lineHeight="0.9"
			/>
			<InputRightElement>
				<GateIcon type="search" color="white" />
			</InputRightElement>
		</InputGroup>
	);
}

export default Search;
