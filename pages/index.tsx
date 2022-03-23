import type { NextPage } from "next";
import Head from "next/head";

import { Box, Container } from "@chakra-ui/react";

import { Explosion } from "@/components/organisms/explosion";
import Menu from "@/components/organisms/menu";
import { NewNFTTemplate } from "@/components/template/new-nft/new-nft";
import { banklessDAO } from "@/mock/dao";
import { bankBeginnerNFT } from "@/mock/nfts";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>New NFT | Gateway</title>
			</Head>
			<Container maxW="container.xl">
				<Menu />
				<Box position="fixed" inset={0} zIndex={1}>
					<Explosion />
				</Box>
				<NewNFTTemplate
					nft={{
						...bankBeginnerNFT,
						dao: banklessDAO,
					}}
					position="relative"
					zIndex={2}
				/>
			</Container>
		</>
	);
};

export default Home;
