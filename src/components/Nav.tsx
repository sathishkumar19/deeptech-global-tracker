import Link from "next/link";
import { getSectorSlugs, getSectorMeta } from "@/lib/data";
import { SectorIcon } from "@/components/icons/SectorIcon";
import type { SectorSlug } from "@/data";

export function Nav() {
  const sectorSlugs = getSectorSlugs();

  return (
    <nav className="flex flex-wrap items-center gap-6 border-b border-neutral-200 px-6 py-4 dark:border-neutral-800">
      <Link href="/" className="text-sm font-medium hover:underline">
        Dashboard
      </Link>
      {sectorSlugs.map((slug) => {
        const meta = getSectorMeta(slug);
        return (
          <Link
            key={slug}
            href={`/${slug}`}
            className={`flex items-center gap-1.5 text-sm font-medium hover:underline ${meta.accentText}`}
          >
            <SectorIcon slug={slug as SectorSlug} className="h-4 w-4" />
            {meta.label}
          </Link>
        );
      })}
      <Link href="/notes" className="text-sm font-medium hover:underline">
        Notes
      </Link>
    </nav>
  );
}
