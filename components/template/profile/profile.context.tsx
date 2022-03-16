import { createContext, useContext } from "react";

import { Profile } from "@/types/profile";

export const ProfileContext = createContext<Profile | null>(null);

export const useProfile = (): Profile => useContext(ProfileContext)!;
