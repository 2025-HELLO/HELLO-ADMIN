import type { ParentEntry } from '../types';

export const isParentComplete = (p: ParentEntry) =>
  !!p.parentName &&
  !!p.parentAge &&
  !!p.drugName &&
  p.times.length >= p.freq &&
  p.times.slice(0, p.freq).every(Boolean);
