import {
	FaDiscord,
	FaGithub,
	FaTelegramPlane,
	FaTwitter,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdMail } from "react-icons/md";

export type SocialIcon = { name: string; icon: IconType };

export const socialIcons = {
	twitter: { name: "Twitter", icon: FaTwitter },
	discord: { name: "Discord", icon: FaDiscord },
	github: { name: "Github", icon: FaGithub },
	telegram: { name: "Telegram", icon: FaTelegramPlane },
	email: { name: "Email", icon: MdMail },
} as const;

export type SocialIconType = keyof typeof socialIcons;
