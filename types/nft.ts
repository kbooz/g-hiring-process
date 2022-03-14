import { DAO } from "./dao";

export type NFT = {
	name: string;
	altName: string;
	image: string;
};

export type NFTwithDAO = NFT & {
	dao: DAO;
};
