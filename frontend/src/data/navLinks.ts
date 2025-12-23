import { Beer, Factory, Home, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavLinkItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

export const navLinks: NavLinkItem[] = [
  { name: "Home", path: "/", icon: Home },
  { name: "Beers", path: "/beers", icon: Beer },
  { name: "Breweries", path: "/breweries", icon: Factory },
  { name: "Admin", path: "/admin", icon: ShieldCheck },
];
