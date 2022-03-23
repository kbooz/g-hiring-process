import { Profile, ProfileExperience } from "@/types/profile";

import { banklessDAO } from "./dao";
import { bankBeginnerNFT } from "./nfts";

const simpleExperience: ProfileExperience = {
	id: "0x0000000000000000000000000000000000000000",
	role: "UI Designer",
	start: "Nov 2021",
	period: "5h/week",
	dao: banklessDAO,
	description:
		"Designer at Yearn.Finance are directly responsible for the quality, creativity, and delivery of the projects they are overseeing, along with revenue",
	workProof: [
		{
			title: "Contributor NFT",
			type: "nft",
			nfts: [
				{
					...bankBeginnerNFT,
				},
				{
					...bankBeginnerNFT,
					id: "0x0000000000000000000000000000000000000001",
				},
			],
		},
		{
			title: "Large Credentials",
			type: "nft",
			nfts: [
				{
					...bankBeginnerNFT,
					id: "0x0000000000000000000000000000000000000002",
				},
				{
					...bankBeginnerNFT,
					id: "0x0000000000000000000000000000000000000003",
				},
				{
					...bankBeginnerNFT,
					id: "0x0000000000000000000000000000000000000004",
				},
				{
					...bankBeginnerNFT,
					id: "0x0000000000000000000000000000000000000005",
				},
			],
		},
		{
			title: "Other Credentials",
			type: "nft",
			nfts: [
				{
					...bankBeginnerNFT,
					id: "0x0000000000000000000000000000000000000006",
				},
				{
					...bankBeginnerNFT,
					id: "0x0000000000000000000000000000000000000007",
				},
				{
					...bankBeginnerNFT,
					id: "0x0000000000000000000000000000000000000008",
				},
			],
		},
	],
};

export const mockProfile: Profile = {
	address: "0x3212312312321321321",
	name: "Masterstark",
	username: "@Masterstark",
	avatar:
		"https://images.unsplash.com/photo-1642192196483-7a8920483769?crop=entropy&cs=tinysrgb&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2VuZXJhdGl2ZXx8fHx8fDE2NDc5OTMzMDc&ixlib=rb-1.2.1&q=80",
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
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at felis quis sem facilisis convallis. Curabitur vel nisl tortor. Quisque eleifend nibh magna, vitae pellentesque ante scelerisque nec. Proin in lacus viverra, facilisis massa sed, iaculis dui.\nInteger maximus nulla sit amet massa tristique, in sagittis neque volutpat. Suspendisse sit amet suscipit arcu. Mauris volutpat tellus nunc, at lobortis leo sollicitudin nec.",
	experiences: [simpleExperience],
};
