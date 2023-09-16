import { Reminder } from '../models/Reminder';
import { reminderDriver } from './driver/reminderDriver';

export const saveReminder = async (item: Reminder) => {
  const insertedId = await reminderDriver.addReminder(item);
  return insertedId;
};

export const deleteReminder = async (id: number) => {
  const success = await reminderDriver.deleteReminder(id);
  if (!success) throw new Error();
  else return;
};

export const getReminders = async () => {
  const items = await reminderDriver.getReminders();
  return items;
};
