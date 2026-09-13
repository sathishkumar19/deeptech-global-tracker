import type { SectorMeta } from "@/types";
import type { SectorSlug } from "./index";

export const sectors: Record<SectorSlug, SectorMeta> = {
  "ai-compute": {
    slug: "ai-compute",
    label: "AI & Compute",
    description: "Chips and systems built to accelerate AI training and inference.",
    specColumns: [
      { key: "chipArchitecture", label: "Architecture" },
      { key: "peakTFLOPS", label: "Peak TFLOPS" },
      { key: "processNodeNm", label: "Node (nm)" },
      { key: "memoryType", label: "Memory" },
    ],
  },
  "drones-uav": {
    slug: "drones-uav",
    label: "Drones & UAV",
    description: "Autonomous aircraft for defense, logistics, and inspection.",
    specColumns: [
      { key: "droneClass", label: "Class" },
      { key: "payloadCapacityKg", label: "Payload (kg)" },
      { key: "rangeKm", label: "Range (km)" },
      { key: "autonomyLevel", label: "Autonomy" },
    ],
  },
  quantum: {
    slug: "quantum",
    label: "Quantum Computing",
    description: "Quantum hardware and software across multiple qubit modalities.",
    specColumns: [
      { key: "qubitType", label: "Qubit Type" },
      { key: "qubitCount", label: "Qubit Count" },
      { key: "errorCorrection", label: "Error Correction" },
    ],
  },
  semiconductors: {
    slug: "semiconductors",
    label: "Semiconductors",
    description: "Chip architectures and interconnects beyond mainstream AI accelerators.",
    specColumns: [
      { key: "chipType", label: "Chip Type" },
      { key: "processNodeNm", label: "Node (nm)" },
      { key: "interconnectType", label: "Interconnect" },
    ],
  },
  spacetech: {
    slug: "spacetech",
    label: "Spacetech",
    description: "Launch vehicles, in-orbit servicing, and space manufacturing.",
    specColumns: [
      { key: "vehicleType", label: "Vehicle" },
      { key: "payloadCapacityKg", label: "Payload (kg)" },
      { key: "orbitClass", label: "Orbit" },
      { key: "launchStatus", label: "Status" },
    ],
  },
  biotech: {
    slug: "biotech",
    label: "Biotech",
    description: "Synthetic biology, AI-driven drug discovery, and cell engineering.",
    specColumns: [
      { key: "modality", label: "Modality" },
      { key: "therapeuticArea", label: "Therapeutic Area" },
      { key: "platformType", label: "Platform" },
      { key: "clinicalStage", label: "Stage" },
    ],
  },
};
