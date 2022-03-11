import type { NextPage } from "next";
import Head from "next/head";

import { useMeasure } from "react-use";

import Menu from "@/components/organisms/menu";
import NewNFT from "@/components/template/new-nft/new-nft";
import { NFT } from "@/types/nft";

const Home: NextPage = () => {
	const [menuRef, { height }] = useMeasure<HTMLElement>();

	const nft: NFT = {
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
				<title>Create Next App</title>
			</Head>
			<Menu ref={menuRef} />
			<NewNFT nft={nft} menuHeight={height} />
		</>
	);
};

export default Home;
