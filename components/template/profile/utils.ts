import { DefaultIcon } from "@/components/atoms/icons";

type SocialItem = {
	name: string;
	icon: DefaultIcon;
};

export const socialIcons: Record<string, SocialItem> = {
	twitter: { name: "Twitter", icon: "twitter" },
	discord: { name: "Discord", icon: "discord" },
	github: { name: "Github", icon: "github" },
	telegram: { name: "Telegram", icon: "telegram" },
	email: { name: "Email", icon: "email" },
};
