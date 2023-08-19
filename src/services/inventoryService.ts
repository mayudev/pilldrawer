import { InventoryItem } from '../models/InventorySchema';
import { inventoryDriver } from './driver/inventoryDriver';

export const saveInventory = async (values: InventoryItem, itemId: number) => {
  const insertedId = await inventoryDriver.addInventoryItem({
    ...values,
    id: itemId,
  });
  console.log(insertedId);
};

export const getInventory = async () => {
  const items = await inventoryDriver.getInventoryItems();
  return items;
};
