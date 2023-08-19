import z from 'zod';
import { Errors } from './errors';

export const InventorySchema = z.object({
  id: z.number().int().nonnegative(),
  name: z.string().nonempty({
    message: Errors.notEmpty,
  }),
  kind: z.string(),
  icon: z.string().optional(),
  count: z
    .number({
      description: Errors.mustBeNumber,
      invalid_type_error: Errors.mustBeNumber,
    })
    .int()
    .nonnegative(),
  doseNumber: z
    .number({
      description: Errors.mustBeNumber,
      invalid_type_error: Errors.mustBeNumber,
    })
    .int()
    .positive(),
  dose: z
    .number({
      description: Errors.mustBeNumber,
      invalid_type_error: Errors.mustBeNumber,
    })
    .nonnegative(),
  unit: z.string().nonempty(),
});

export type InventoryItem = z.input<typeof InventorySchema>;
