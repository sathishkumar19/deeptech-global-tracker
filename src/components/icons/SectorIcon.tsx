import type { SVGProps } from "react";
import type { SectorSlug } from "@/data";

type IconProps = SVGProps<SVGSVGElement>;

const shared = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function AiComputeIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10" y="10" width="4" height="4" rx="0.5" />
      <path d="M9 2.5v3M12 2.5v3M15 2.5v3M9 18.5v3M12 18.5v3M15 18.5v3M2.5 9h3M2.5 12h3M2.5 15h3M18.5 9h3M18.5 12h3M18.5 15h3" />
    </svg>
  );
}

function DronesUavIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <rect x="10" y="10" width="4" height="4" rx="0.75" />
      <path d="M10 10 5 5M14 10l5-5M10 14l-5 5M14 14l5 5" />
      <circle cx="4.5" cy="4.5" r="2.25" />
      <circle cx="19.5" cy="4.5" r="2.25" />
      <circle cx="4.5" cy="19.5" r="2.25" />
      <circle cx="19.5" cy="19.5" r="2.25" />
    </svg>
  );
}

function QuantumIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
    </svg>
  );
}

function SemiconductorsIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <rect x="8" y="8" width="8" height="8" rx="1" />
      <path d="M9 4v4M15 4v4M9 16v4M15 16v4M4 9h4M4 15h4M16 9h4M16 15h4" />
      <circle cx="9" cy="4" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="4" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="9" cy="20" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="20" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="4" cy="9" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="4" cy="15" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="20" cy="9" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="20" cy="15" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SpacetechIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M12 2.5c2.8 2.3 4 5.4 4 9 0 2-.5 4-1.2 5.6L12 19l-2.8-2c-.7-1.6-1.2-3.5-1.2-5.5 0-3.6 1.2-6.7 4-9.5z" />
      <circle cx="12" cy="10" r="1.6" />
      <path d="M9.2 15 6.5 17.5l1 2.8M14.8 15l2.7 2.5-1 2.8" />
      <path d="M10.5 19.5 12 22l1.5-2.5" />
    </svg>
  );
}

function BiotechIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M7 2.5c0 5 10 5 10 9.5s-10 4.5-10 9.5M17 2.5c0 5-10 5-10 9.5s10 4.5 10 9.5" />
      <path d="M8 6.5h8M7.3 12h9.4M8 17.5h8" />
    </svg>
  );
}

const icons: Record<SectorSlug, (props: IconProps) => React.JSX.Element> = {
  "ai-compute": AiComputeIcon,
  "drones-uav": DronesUavIcon,
  quantum: QuantumIcon,
  semiconductors: SemiconductorsIcon,
  spacetech: SpacetechIcon,
  biotech: BiotechIcon,
};

/** Hand-drawn, dual-tone inline SVG icon representing a sector's technology. */
export function SectorIcon({ slug, ...props }: { slug: SectorSlug } & IconProps) {
  const Icon = icons[slug];
  return <Icon {...props} />;
}
