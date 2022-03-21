import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import theme from "@/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<AnimatePresence>
				<Component {...pageProps} />
			</AnimatePresence>
		</ChakraProvider>
	);
}

export default MyApp;
