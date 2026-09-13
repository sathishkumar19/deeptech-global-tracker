import { techRegistry, type SectorSlug } from "@/data";
import { sectors } from "@/data/sectors";
import { trendsRegistry } from "@/data/trends";
import type { TechCompany, Trend } from "@/types";

export function getSectorSlugs(): SectorSlug[] {
  return Object.keys(techRegistry) as SectorSlug[];
}

export function getSectorData(slug: SectorSlug): TechCompany[] {
  return techRegistry[slug];
}

export function getSectorMeta(slug: SectorSlug) {
  return sectors[slug];
}

export function getAllCompanies(): TechCompany[] {
  return getSectorSlugs().flatMap((slug) => techRegistry[slug]);
}

export function getSectorTrends(slug: SectorSlug): Trend[] {
  return trendsRegistry[slug];
}
