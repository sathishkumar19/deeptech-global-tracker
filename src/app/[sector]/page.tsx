import { notFound } from "next/navigation";
import { getSectorData, getSectorMeta, getSectorSlugs, getSectorTrends } from "@/lib/data";
import type { SectorSlug } from "@/data";

export function generateStaticParams() {
  return getSectorSlugs().map((sector) => ({ sector }));
}

export default function SectorPage({ params }: { params: { sector: string } }) {
  const slugs = getSectorSlugs();
  if (!slugs.includes(params.sector as SectorSlug)) {
    notFound();
  }

  const slug = params.sector as SectorSlug;
  const meta = getSectorMeta(slug);
  const companies = getSectorData(slug);
  const trends = getSectorTrends(slug);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">{meta.label}</h1>
        <p className="text-sm text-neutral-500">{meta.description}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left text-xs">
          <thead>
            <tr className="border-b border-neutral-200">
              <th className="py-2 pr-3">Company</th>
              <th className="py-2 pr-3">Country</th>
              <th className="py-2 pr-3">Founded</th>
              <th className="py-2 pr-3">Funding Stage</th>
              <th className="py-2 pr-3">Total Funding</th>
              <th className="py-2 pr-3">Last Round</th>
              <th className="py-2 pr-3">TRL</th>
              {meta.specColumns.map((col) => (
                <th key={col.key} className="py-2 pr-3">
                  {col.label}
                </th>
              ))}
              <th className="py-2 pr-3">Description</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id} className="border-b border-neutral-100">
                <td className="py-2 pr-3 font-medium">
                  <a href={company.website} target="_blank" rel="noreferrer" className="hover:underline">
                    {company.name}
                  </a>
                </td>
                <td className="py-2 pr-3">{company.country}</td>
                <td className="py-2 pr-3">{company.foundedYear}</td>
                <td className="py-2 pr-3">{company.fundingStage}</td>
                <td className="py-2 pr-3">
                  {company.totalFundingUsd > 0
                    ? `$${(company.totalFundingUsd / 1_000_000).toLocaleString()}M`
                    : "—"}
                </td>
                <td className="py-2 pr-3">{company.lastFundingRound}</td>
                <td className="py-2 pr-3">{company.trl}</td>
                {meta.specColumns.map((col) => (
                  <td key={col.key} className="py-2 pr-3">
                    {company.specs[col.key] ?? "—"}
                  </td>
                ))}
                <td className="max-w-xs whitespace-normal py-2 pr-3 text-neutral-600">{company.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-medium">Top 10 Trends</h2>
        <ol className="grid gap-3 sm:grid-cols-2">
          {trends.map((trend, index) => (
            <li key={trend.id} className="rounded border border-neutral-200 p-3">
              <p className="text-sm font-semibold">
                {index + 1}. {trend.title}
              </p>
              <p className="mt-1 text-sm text-neutral-700">{trend.description}</p>
              <p className="mt-1 text-xs text-neutral-500">{trend.whatItIs}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
