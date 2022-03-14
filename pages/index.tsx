import type { NextPage } from "next";
import Head from "next/head";

import { useMeasure } from "react-use";

import Menu from "@/components/organisms/menu";
import { NewNFTTemplate } from "@/components/template/new-nft/new-nft";
import { NFT } from "@/types/nft";

const Home: NextPage = () => {
	const nft: Required<NFT> = {
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
			<Menu />
			<NewNFTTemplate nft={nft} />
		</>
	);
};

export default Home;
