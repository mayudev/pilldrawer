import { useLocation, useNavigate } from '@solidjs/router';
import Button from '../components/forms/Button';
import { PageTitle } from '../components/layout/PageTitle';
import TextField from '../components/forms/TextField';
import { DrugKind, getEnumKeys } from '../models/InventoryItem';
import Select from '../components/forms/Select';
import { SectionHeading } from '../components/layout/SectionHeading';
import { InventoryItem, InventorySchema } from '../models/InventorySchema';
import {
  deleteInventoryItem,
  saveInventory,
} from '../services/inventoryService';
import { hasNoKeys, useForm } from '../hooks/useForm';

const kinds = getEnumKeys(DrugKind);

const units = ['mg', 'dose'];

const InventoryForm = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  const { form, fieldArgs, validateForm } = useForm<InventoryItem>({
    initialValues: (state as InventoryItem) ?? {
      id: 0,
      count: 1,
      doseNumber: 1,
      dose: 1,
      kind: 'Pill',
      name: '',
      unit: 'mg',
    },
    schema: InventorySchema,
  });

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    const errors = validateForm();
    if (errors && hasNoKeys(errors)) {
      await saveInventory(form, form.id);
      navigate('/inventory');
    }
    console.dir(errors);
  };

  const deleteItem = async (e: Event) => {
    e.preventDefault();
    if (state) {
      await deleteInventoryItem((state as InventoryItem).id);
      navigate('/inventory');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div class="flex items-center mx-4">
          <button class="display-none" />
          <Button
            circular
            onClick={() => navigate('/inventory')}
            title="Return"
          >
            <div class="i-material-symbols-arrow-back text-2xl" />
          </Button>
          <PageTitle>{state ? 'Edit item' : 'Add new item'}</PageTitle>
          <span class="flex-1" />

          <Button>Save</Button>
        </div>
        <main class="my-2 mx-4 ">
          <SectionHeading>Details</SectionHeading>
          <section class="pb-6">
            <TextField label="Name" value={form.name} {...fieldArgs('name')} />
            <Select
              label="Kind"
              options={kinds}
              value={form.kind || 'Pill'}
              {...fieldArgs('kind')}
            />
          </section>
          <SectionHeading>Package</SectionHeading>
          <section class="flex items-baseline">
            <TextField
              value={form.count}
              type="number"
              label="Count"
              {...fieldArgs('count')}
            />
            <TextField
              value={form.doseNumber}
              type="number"
              class="max-w-120px"
              label="Number of doses"
              {...fieldArgs('doseNumber')}
            />
            <span class="text-3xl mr-4">x</span>

            <TextField
              type="number"
              class="max-w-100px"
              value={form.dose}
              label="Dose"
              {...fieldArgs('dose')}
            />
            <Select
              label="Unit"
              options={units}
              {...fieldArgs('unit')}
              value={form.unit || 'mg'}
            />
          </section>
          {state && (
            <div class="mt-6">
              <Button onClick={deleteItem} negative>
                Delete
              </Button>
            </div>
          )}
        </main>
      </div>
    </form>
  );
};

export default InventoryForm;
