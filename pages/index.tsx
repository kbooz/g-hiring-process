import type { NextPage } from "next";
import Head from "next/head";

import Menu from "@/components/organisms/menu";
import NewNFT from "@/components/template/new-nft/new-nft";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Menu />
			<NewNFT />
		</>
	);
};

export default Home;
