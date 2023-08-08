export interface InventoryItem {
  name: string;
  daily: number;
  left: number;
  unit: string;
}

export enum DrugKind {
  Pill = 'pill',
  Injection = 'injection',
  Gel = 'gel',
  Other = 'Other',
}

export const getEnumKeys = <T extends object>(v: T): Array<keyof typeof v> =>
  Object.keys(v) as Array<keyof typeof v>;
