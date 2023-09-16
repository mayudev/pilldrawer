import z from 'zod';

export enum ReminderFrequency {
  Daily = 1,
  Weekly = 7,
  Monthly = 30,
}

export const ReminderSchema = z.object({
  id: z.number().int().nonnegative(),
  medicationId: z.number().int().nonnegative(),
  frequency: z.nativeEnum(ReminderFrequency),
  weekdays: z.number().nonnegative().max(127).optional(),
  hour: z.number().min(0).max(24).default(12),
  minute: z.number().min(0).max(59).default(0),
});

export type Reminder = z.input<typeof ReminderSchema>;
