import { aiComputeData } from './aiCompute';
import { dronesUavData } from './dronesUav';
import { quantumData } from './quantum';
import { semiconductorsData } from './semiconductors';
import { spacetechData } from './spacetech';
import { biotechData } from './biotech';

export const techRegistry = {
  'ai-compute': aiComputeData,
  'drones-uav': dronesUavData,
  'quantum': quantumData,
  'semiconductors': semiconductorsData,
  'spacetech': spacetechData,
  'biotech': biotechData,
};

export type SectorSlug = keyof typeof techRegistry;
