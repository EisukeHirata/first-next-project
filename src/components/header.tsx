import Link from "next/link";
import type { VFC } from "react";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/posts", label: "Posts" },
];

export const Header: VFC = () => {
  return (
    <header className="container px-4 mx-auto">
      <nav className="flex justify-between items-center py-6">
        <a className="pr-10 text-3xl font-semibold leading-none">Tech House Community</a>
        <div className="flex items-center space-x-12 w-auto">
          {items.map(({ href, label }) => {
            return (
              <Link key={href} href={href}>
                <a className="inline-block text-sm text-gray-400 hover:text-gray-500">{label}</a>
              </Link>
            );
          })}
        </div>
        <div className="ml-auto">
          <a className="inline-block py-3 px-4 mr-2 text-xs font-semibold leading-none text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
            Log In
          </a>
          <a className="inline-block py-3 px-4 text-xs font-semibold leading-none text-white bg-blue-600 hover:bg-blue-700 rounded">
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};
