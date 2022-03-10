import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";

import NFTBadge from "@/components/molecules/nft-badge";
import Menu from "@/components/organisms/menu";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Menu />
			<Box
				as="main"
				py="8"
				d="flex"
				flexFlow="column"
				alignItems="center"
				gap="8"
			>
				<Box textAlign="center">
					<Text as="h1" textStyle="bg" fontSize="6xl" fontWeight="extrabold">
						Congratulations!
					</Text>
					<Text>
						You have earned the{" "}
						<Text as="b" color="brand.pink.500">
							Bankless Beginner
						</Text>{" "}
						Badge from
					</Text>
				</Box>
				<Box w="30%" sx={{ aspectRatio: 1 / 1 }}>
					<NFTBadge
						name="BANK.Beginner"
						image="https://source.unsplash.com/500x500"
					/>
				</Box>
				<ButtonGroup spacing="2" alignSelf="stretch" justifyContent="center">
					<Button>Check your profile</Button>
					<Button w="10rem">Close</Button>
				</ButtonGroup>
			</Box>
		</>
	);
};

export default Home;
