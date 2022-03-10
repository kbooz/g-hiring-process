import { Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

function Search() {
	return (
		<InputGroup>
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
