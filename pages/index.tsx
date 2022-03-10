import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Box, Text } from "@chakra-ui/react";

import Menu from "@/components/organisms/menu";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Menu />
			<main>
				<Text as="h1" textStyle="bg" fontSize="6xl" fontWeight="extrabold">
					Welcome to Chakra UI
				</Text>
			</main>
		</>
	);
};

export default Home;
