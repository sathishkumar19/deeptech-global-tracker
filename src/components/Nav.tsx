import Link from "next/link";
import { getSectorSlugs, getSectorMeta } from "@/lib/data";

export function Nav() {
  const sectorLinks = getSectorSlugs().map((slug) => ({
    href: `/${slug}`,
    label: getSectorMeta(slug).label,
  }));

  const links = [{ href: "/", label: "Dashboard" }, ...sectorLinks, { href: "/notes", label: "Notes" }];

  return (
    <nav className="flex flex-wrap gap-6 border-b border-neutral-200 px-6 py-4">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="text-sm font-medium hover:underline">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
