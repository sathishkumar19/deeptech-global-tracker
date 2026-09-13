import { getAllCompanies, getSectorSlugs, getSectorMeta, getSectorData } from "@/lib/data";

export default function DashboardPage() {
  const companies = getAllCompanies();
  const sectorSlugs = getSectorSlugs();

  const countryCounts = new Map<string, number>();
  for (const company of companies) {
    countryCounts.set(company.country, (countryCounts.get(company.country) ?? 0) + 1);
  }
  const topCountries = [...countryCounts.entries()].sort((a, b) => b[1] - a[1]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-neutral-500">
          {companies.length} companies tracked across {sectorSlugs.length} sectors.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        {sectorSlugs.map((slug) => {
          const meta = getSectorMeta(slug);
          const count = getSectorData(slug).length;
          return (
            <a
              key={slug}
              href={`/${slug}`}
              className="min-w-[160px] rounded border border-neutral-200 p-4 hover:border-neutral-400"
            >
              <p className="text-sm text-neutral-500">{meta.label}</p>
              <p className="text-3xl font-bold">{count}</p>
            </a>
          );
        })}
      </div>

      <div>
        <h2 className="mb-2 text-lg font-medium">By country</h2>
        <table className="w-full max-w-sm text-left text-sm">
          <tbody>
            {topCountries.map(([country, count]) => (
              <tr key={country} className="border-b border-neutral-100">
                <td className="py-1.5">{country}</td>
                <td className="py-1.5 text-right">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
