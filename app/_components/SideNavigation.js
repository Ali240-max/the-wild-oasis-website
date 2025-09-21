"use client";
import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();
  return (
    <nav className="border-r border-primary900 ">
      <ul className="flex flex-col max-sm:flex-row max-sm:items-center max-sm:justify-center gap-2 h-full text-lg max-sm:text-xs max-sm:gap-0">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 max-sm:px-2 hover:bg-primary900 hover:text-primary100 transition-colors flex items-center gap-4 max-sm:gap-2 font-semibold text-primary200 ${
                pathname === link.href ? "bg-primary90" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span className="max-[370px]:hidden">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto max-sm:mt-0 ">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
