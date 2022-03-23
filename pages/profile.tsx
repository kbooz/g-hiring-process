import type { NextPage } from "next";
import Head from "next/head";

import { Container } from "@chakra-ui/react";

import Menu from "@/components/organisms/menu";
import { ProfileTemplate } from "@/components/template/profile";
import { mockProfile } from "@/mock/profile";

const Profile: NextPage = () => {
	return (
		<>
			<Head>
				<title>Profile | Gateway</title>
			</Head>
			<Container maxW="container.xl">
				<Menu />
				<ProfileTemplate profile={mockProfile} />
			</Container>
		</>
	);
};

export default Profile;
