import { Reminder } from '../../models/Reminder';
import { db } from '../db';

export const reminderDriver = {
  addReminder: async (item: Reminder) => {
    const instance = await db();
    const result = await instance.execute(
      `INSERT INTO reminder
      (id, medication_id, frequency, weekdays, hour, minute)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT(id)
      DO UPDATE SET medication_id=excluded.medication_id, frequency=excluded.frequency, weekdays=excluded.weekdays, hour=excluded.hour, minute=excluded.minute;`,
      [
        item.id === 0 ? null : item.id,
        item.medicationId,
        item.frequency,
        item.weekdays,
        item.hour,
        item.minute,
      ]
    );

    return result.lastInsertId;
  },
  getReminders: async () => {
    const instance = await db();
    const result = (await instance.select(
      'SELECT id, medication_id, frequency, weekdays, hour, minute FROM reminder;'
    )) as Record<string, unknown>[];

    return result.map(r => ({
      ...r,
      medicationId: r.medication_id,
    })) as Reminder[];
  },
  deleteReminder: async (id: number) => {
    const instance = await db();
    const result = await instance.execute(
      `DELETE FROM reminder WHERE id = $1`,
      [id]
    );
    return result.rowsAffected > 0;
  },
};
