import { useNavigate } from '@solidjs/router';
import Button from '../components/forms/Button';
import { PageTitle } from '../components/layout/PageTitle';
import TextField from '../components/forms/TextField';
import { DrugKind, getEnumKeys } from '../models/InventoryItem';
import Select from '../components/forms/Select';
import { createSignal } from 'solid-js';
import { SectionHeading } from '../components/layout/SectionHeading';

const kinds = getEnumKeys(DrugKind);

const InventoryForm = () => {
  const navigate = useNavigate();

  const [currentKind, setCurrentKind] =
    createSignal<keyof typeof DrugKind>('Pill');

  const navigateBack = () => navigate('/inventory');

  return (
    <div>
      <div class="flex items-center mx-4">
        <Button circular onClick={navigateBack} title="Return">
          <div class="i-material-symbols-arrow-back text-2xl" />
        </Button>
        <PageTitle>Add new item</PageTitle>
      </div>

      <main class="my-2 mx-4">
        <section class="pb-6">
          <SectionHeading>Details</SectionHeading>
          <TextField label="Name" />
          <Select
            value={currentKind()}
            onChange={setCurrentKind}
            label="Kind"
            options={kinds}
          />
        </section>
        <section>
          <SectionHeading>Packages</SectionHeading>
        </section>
      </main>
    </div>
  );
};

export default InventoryForm;
