export interface TechCompany {
  id: string;
  name: string;
  country: string;
  region: string;
  foundedYear: number;
  employees: string;
  fundingStage: string;
  totalFundingUsd: number;
  lastFundingRound: string;
  lastFundingAmountUsd: number;
  lastFundingDate: string;
  keyInvestors: string[];
  trl: number;
  website: string;
  tags: string[];
  summary: string;
  /** Sector-specific dense attributes — columns vary by sector. */
  specs: Record<string, string | number>;
}

export type TechSectorData = TechCompany[];

export interface SectorMeta {
  slug: string;
  label: string;
  description: string;
  specColumns: { key: string; label: string }[];
}

export interface Trend {
  id: string;
  title: string;
  /** One-sentence statement of what's happening in the industry. */
  description: string;
  /** Slightly longer explanation of the mechanism and why it matters. */
  whatItIs: string;
}

