import Link from "next/link";
import type { VFC } from "react";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/posts", label: "Posts" },
];

export const Header: VFC = () => {
  return (
    <header className="items-center h-40">
      <a className="text-3xl">Tech House Community</a>
      <nav style={{ float: "right" }}>
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a className="inline-block p-4">{label}</a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
