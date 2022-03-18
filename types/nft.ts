import { DAO } from "./dao";

export type NFT = {
	id?: string;
	name: string;
	altName: string;
	image: string;
	date?: string;
};

export type NFTwithDAO = NFT & {
	dao: DAO;
};
