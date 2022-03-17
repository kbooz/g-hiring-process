import type { NextPage } from "next";
import Head from "next/head";

import { Container } from "@chakra-ui/react";
import { useMeasure } from "react-use";

import Menu from "@/components/organisms/menu";
import { ProfileTemplate } from "@/components/template/profile";
import { NFT } from "@/types/nft";
import { ProfileExperience } from "@/types/profile";

const nft = (): NFT => ({
	name: "BANK.Beginner",
	altName: "Bankless Beginner",
	image: `https://source.unsplash.com/random/300x300/?generative&a=${Math.random()}`,
	date: "Dec 2021",
});

const experience = (): ProfileExperience => ({
	role: "UI Designer",
	dao: {
		name: "Bankless DAO",
		image: "/images/bankless-dao.png",
	},
	start: "Nov 2021",
	period: "5h/week",
	description:
		"Designer at Yearn.Finance are directly responsible for the quality, creativity, and delivery of the projects they are overseeing, along with revenue",
	workProof: [
		{
			title: "Contributor NFT",
			type: "nft",
			nfts: [nft()],
		},
		{
			title: "Large Credentials",
			type: "nft",
			nfts: [nft(), nft(), nft(), nft(), nft()],
		},
		{
			title: "Other Credentials",
			type: "nft",
			nfts: [nft(), nft(), nft()],
		},
	],
});

const Profile: NextPage = () => {
	return (
		<>
			<Head>
				<title>Profile | Gateway</title>
			</Head>
			<Container maxW="container.xl">
				<Menu />
				<ProfileTemplate
					profile={{
						address: "0x3212312312321321321",
						name: "Masterstark",
						username: "@Masterstark",
						avatar:
							"https://source.unsplash.com/random/500x500/?generative&a=1",
						bio: "I share about DAOs, social tokens and web3 communities.\nCo-fouder of @mygateway, NFT Collector & Writer @mirrorxyz.",
						url: "www.mygateway.xyz",
						links: [
							{
								icon: "twitter",
								href: "",
							},
							{
								icon: "github",
								href: "",
							},
							{
								icon: "discord",
								href: "",
							},
							{
								icon: "email",
								href: "",
							},
							{
								icon: "telegram",
								href: "",
							},
						],
						about:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at felis quis sem facilisis convallis. Curabitur vel nisl tortor. Quisque eleifend nibh magna, vitae pellentesque ante scelerisque nec. Proin in lacus viverra, facilisis massa sed, iaculis dui. Integer maximus nulla sit amet massa tristique, in sagittis neque volutpat. Suspendisse sit amet suscipit arcu. Mauris volutpat tellus nunc, at lobortis leo sollicitudin nec.",
						experiences: [experience(), experience()],
					}}
				/>
			</Container>
		</>
	);
};

export default Profile;
