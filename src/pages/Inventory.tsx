import { For } from 'solid-js';
import CollectionItem from '../components/collection/CollectionItem';
import { PageTitle } from '../components/layout/PageTitle';
import { InventoryItem } from '../models/InventoryItem';

const tempData: InventoryItem[] = [
  { name: 'Estradiol', daily: 4, unit: 'mg', left: 100 },
];

const Inventory = () => (
  <div>
    <PageTitle>Inventory</PageTitle>
    <main class="grid grid-cols-2 m-4">
      <For each={tempData}>{item => <CollectionItem data={item} />}</For>
    </main>
  </div>
);

export default Inventory;
