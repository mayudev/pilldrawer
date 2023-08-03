import { AppMenuItem } from './AppMenuItem';

export const AppMenu = () => {
  return (
    <div class="bg-secondary">
      <AppMenuItem
        title="Reminders"
        icon="i-material-symbols-alarm"
        href="/reminders"
      />
      <AppMenuItem
        title="Tracking"
        icon="i-material-symbols-calendar-today"
        href="/tracking"
      />
      <AppMenuItem
        title="Inventory"
        icon="i-material-symbols-inbox"
        href="/inventory"
      />
    </div>
  );
};
