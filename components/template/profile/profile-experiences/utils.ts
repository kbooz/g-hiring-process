import { useEffect, useState } from "react";

import { useSessionStorage } from "react-use";

import { NFT } from "@/types/nft";

export function useNewNFTRouteChange(nfts: NFT[], animationDuration: number) {
	const [sessionNewNFT, setSessionNewNFT] = useSessionStorage("new-nft");

	/* Handles animation of route change when has an nft id on session */
	const [hasNewNFT, setHasNewNFT] = useState(() =>
		nfts.some((nft) => nft.id === sessionNewNFT)
	);
	console.log(sessionNewNFT, hasNewNFT);

	/* Reset state after x duration if has new nft on current section */
	useEffect(() => {
		if (hasNewNFT) {
			setTimeout(() => setHasNewNFT(false), animationDuration * 1000);
			setSessionNewNFT(null);
		}
	}, [animationDuration, hasNewNFT, setSessionNewNFT]);

	return [hasNewNFT, sessionNewNFT];
}
