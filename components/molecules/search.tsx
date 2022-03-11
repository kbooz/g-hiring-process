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
				py={2}
				placeholder="Search"
				focusBorderColor="white"
			/>
			<InputRightElement>
				<Icon as={FaSearch} color="white" />
			</InputRightElement>
		</InputGroup>
	);
}

export default Search;
