import { Compass, CirclePlus } from "lucide-react";
import { ReactNode } from "react";

export interface Tab {
  path: string;
  name: string;
  icon: ReactNode;
}

export const tabs: Tab[] = [
  {
    path: "/auth/dashboard",
    name: "Browse",
    icon: <Compass size={22} />,
  },
  {
    path: "/auth/add-doc",
    name: "Add Doc",
    icon: <CirclePlus size={22} />,
  },
];
