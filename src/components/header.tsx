import Link from "next/link";
import type { VFC } from "react";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/Posts", label: "Posts" },
];

export const Header: VFC = () => {
  return (
    <header>
      <h1 style={{ fontSize: "40px" }}>Tech House Community</h1>
      <nav>
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
