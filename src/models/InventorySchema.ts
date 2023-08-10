import z from 'zod';

export const InventoryFormSchema = z.object({
  name: z.string(),
  kind: z.string().nonempty(),
  packages: z.array(
    z.object({
      name: z.string().optional(),
      doses: z.number().int().nonnegative(),
      dose: z.number().nonnegative(),
      unit: z.string().nonempty(),
    })
  ),
});

export type InventorySchema = z.input<typeof InventoryFormSchema>;
