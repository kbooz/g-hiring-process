import { Icon, IconProps } from "@chakra-ui/react";
import { AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import { FaChevronDown, FaPen, FaSearch } from "react-icons/fa";
import {
	FaDiscord,
	FaGithub,
	FaTelegramPlane,
	FaTwitter,
} from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { IoNotifications, IoShareSocial } from "react-icons/io5";
import { MdMail } from "react-icons/md";

import { Ethereum } from "./ethereum";
import { Logo } from "./logo";

export const defaultIcons = {
	add: AiOutlinePlus,
	bell: IoNotifications,
	"caret-down": AiFillCaretDown,
	"chevron-down": FaChevronDown,
	copy: FiCopy,
	discord: FaDiscord,
	edit: FaPen,
	email: MdMail,
	ethereum: Ethereum,
	github: FaGithub,
	location: HiLocationMarker,
	logo: Logo,
	search: FaSearch,
	share: IoShareSocial,
	telegram: FaTelegramPlane,
	twitter: FaTwitter,
} as const;

export type DefaultIcon = keyof typeof defaultIcons;

export const GateIcon = ({
	type,
	...props
}: IconProps & { type: keyof typeof defaultIcons }) => (
	<Icon as={defaultIcons[type]} {...props} />
);
