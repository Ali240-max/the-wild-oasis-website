"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navigation({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-10 text-xl max-sm:text-sm">
      {/* Desktop Navigation */}
      <ul className="hidden max-sm:hidden sm:flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent400 transition-colors flex items-center gap-2"
            >
              <img
                src={session.user.image}
                alt={session.user.name}
                className="w-8 h-8 rounded-full"
                referrerPolicy="no-referrer"
              />
              <span>Guest</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent400 transition-colors"
            >
              Guest
            </Link>
          )}
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="sm:hidden relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="px-2 py-2 border rounded-md text-primary100"
        >
          ☰
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="absolute right-0 mt-2 shadow-lg rounded-lg p-10 flex flex-col gap-2  bg-primary800 text-white transition-all duration-300">
            <li>
              <Link
                href="/cabins"
                onClick={() => setIsOpen(false)}
                className="hover:bg-accent500 px-2 py-2 rounded-md"
              >
                Cabins
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="hover:bg-accent500 px-2 py-2 rounded-md"
              >
                About
              </Link>
            </li>
            <li>
              {session?.user?.image ? (
                <Link
                  href="/account"
                  className="flex items-center hover:bg-accent500  rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src={session.user.image}
                    alt={session.user.name}
                    className="w-6 h-6 rounded-full"
                    referrerPolicy="no-referrer"
                  />
                  <span className="hover:bg-accent500 px-2 py-2 rounded-md">
                    Guest
                  </span>
                </Link>
              ) : (
                <Link href="/account" onClick={() => setIsOpen(false)}>
                  Guest
                </Link>
              )}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
