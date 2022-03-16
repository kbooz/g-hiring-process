import { SocialIconType } from "@/utils/icon";

import { DAO } from "./dao";
import { NFT } from "./nft";

export type WorkProof = {
	title: string;
	type: "nft" | "credentials";
	nfts: NFT[];
};

export type ProfileExperience = {
	role: string;
	dao: DAO;
	start: string;
	end?: string;
	period: string;
	description: string;
	workProof?: WorkProof[];
};

export type ProfileLink = {
	href: string;
	icon?: SocialIconType;
};

export type Profile = {
	address: string;
	name: string;
	username: string;
	avatar: string;
	url: string;
	bio: string;
	links: ProfileLink[];
	about: string;
	experiences: ProfileExperience[];
};
