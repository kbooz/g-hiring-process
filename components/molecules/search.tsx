import {
	Icon,
	Input,
	InputGroup,
	InputGroupProps,
	InputRightElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

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
				<Icon as={FaSearch} color="white" />
			</InputRightElement>
		</InputGroup>
	);
}

export default Search;
