import { For, createResource } from 'solid-js';
import CollectionItem from '../components/collection/CollectionItem';
import { PageTitle } from '../components/layout/PageTitle';
import Button from '../components/forms/Button';
import { A } from '@solidjs/router';
import { getInventory } from '../services/inventoryService';

const Inventory = () => {
  const [items] = createResource(getInventory);

  return (
    <div>
      <div class="flex items-center justify-between mr-6">
        <PageTitle>Inventory</PageTitle>
        <A href="/inventory/add" class="cursor-default">
          <Button title="Add item" circular>
            <div class="i-material-symbols-add text-2xl" />
          </Button>
        </A>
      </div>
      <main class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 m-4">
        <For each={items()}>
          {item => (
            <A
              class="text-inherit decoration-none"
              href={`/inventory/edit/${item.id}`}
              state={item}
            >
              <CollectionItem
                data={{
                  name: item.name,
                  left: item.count * item.doseNumber,
                  unit: item.unit,
                  daily: 1,
                }}
              />
            </A>
          )}
        </For>
      </main>
    </div>
  );
};

export default Inventory;
