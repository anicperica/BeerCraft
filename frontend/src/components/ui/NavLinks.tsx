import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface NavLinkItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

interface NavLinksProps {
  links: NavLinkItem[];
  className?: string;
  onClick?: () => void;
}

export default function NavLinks({ links, className, onClick }: NavLinksProps) {
  return (
    <ul className={className}>
      {links.map(({ name, path, icon: Icon }) => (
        <li key={name}>
          <NavLink
            to={path}
            onClick={onClick}
            className={({ isActive }) =>
              `flex items-center w-full gap-3 px-2 py-1 rounded transition
               ${isActive ? "bg-zinc-900 px-3 text-amber-400" : "text-gray-300 hover:text-amber-400 hover:bg-zinc-800"}`
            }
          >
            <Icon size={20} className="inline-block" />
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
