import type { NextPage } from "next";
import Head from "next/head";

import { Container } from "@chakra-ui/react";
import { useMeasure } from "react-use";

import Menu from "@/components/organisms/menu";
import { NewNFTTemplate } from "@/components/template/new-nft/new-nft";
import { NFT, NFTwithDAO } from "@/types/nft";

const Home: NextPage = () => {
	const nft: NFTwithDAO = {
		id: "1",
		name: "BANK.Beginner",
		altName: "Bankless Beginner",
		image: "https://source.unsplash.com/random/500x500/?generative",
		dao: {
			name: "Bankless DAO",
			image: "/images/bankless-dao.png",
		},
	};

	return (
		<>
			<Head>
				<title>New NFT | Gateway</title>
			</Head>
			<Container maxW="container.xl">
				<Menu />
				<NewNFTTemplate nft={nft} />
			</Container>
		</>
	);
};

export default Home;
