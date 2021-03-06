import { ComponentSingleStyleConfig } from "@chakra-ui/react";

/* 
  Helper type to extract the possible css stylesheet (with interactions) that a component can use
*/
export type ChakraStylesheet = Extract<
	ComponentSingleStyleConfig["variants"],
	object
>[0];
