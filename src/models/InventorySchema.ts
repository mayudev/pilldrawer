import z from 'zod';
import { DrugKind } from './InventoryItem';

export const InventoryFormSchema = z.object({
  id: z.number().nonnegative().int(),
  name: z.string(),
  kind: z.nativeEnum(DrugKind),
  icon: z.string(),
  count: z.number().int(),
  doseNumber: z.number().int().nonnegative(),
  dose: z.number().nonnegative(),
  unit: z.string().nonempty(),
});

export type InventorySchema = z.input<typeof InventoryFormSchema>;
