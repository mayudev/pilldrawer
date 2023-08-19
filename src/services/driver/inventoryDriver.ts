import { InventoryItem } from '../../models/InventorySchema';
import { db } from '../db';

export const inventoryDriver = {
  addInventoryItem: async (item: InventoryItem) => {
    const instance = await db();
    const result = await instance.execute(
      `INSERT into medication 
      (id, name, kind, icon, count, dose_number, dose, unit) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      ON CONFLICT(id)
      DO UPDATE SET name = excluded.name, kind=excluded.kind, icon=excluded.icon, count=excluded.count, dose_number=excluded.dose_number, dose=excluded.dose, unit=excluded.unit;`,
      [
        item.id === 0 ? null : item.id,
        item.name,
        item.kind,
        item.icon,
        item.count,
        item.doseNumber,
        item.dose,
        item.unit,
      ]
    );

    return result.lastInsertId;
  },
  getInventoryItems: async () => {
    const instance = await db();
    const result = (await instance.select(
      'SELECT id, name, kind, icon, count, dose_number, dose, unit FROM medication;'
    )) as Record<string, unknown>[];

    return result.map(r => ({
      ...r,
      doseNumber: r.dose_number,
    })) as InventoryItem[];
  },
};
