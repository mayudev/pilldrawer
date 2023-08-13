import { InventorySchema } from '../models/InventorySchema';
import { inventoryDriver } from './driver/inventoryDriver';

export const saveInventory = async (
  values: InventorySchema,
  itemId: number
) => {
  const insertedId = await inventoryDriver.addInventoryItem({
    ...values,
    id: itemId,
  });
  console.log(insertedId);
};
