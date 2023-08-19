import { useLocation, useNavigate } from '@solidjs/router';
import Button from '../components/forms/Button';
import { PageTitle } from '../components/layout/PageTitle';
import TextField from '../components/forms/TextField';
import { DrugKind, getEnumKeys } from '../models/InventoryItem';
import Select from '../components/forms/Select';
import { SectionHeading } from '../components/layout/SectionHeading';
import { SubmitHandler, createForm, zodForm } from '@modular-forms/solid';
import { InventoryItem, InventorySchema } from '../models/InventorySchema';
import { saveInventory } from '../services/inventoryService';

const kinds = getEnumKeys(DrugKind);

const units = ['mg', 'dose'];

const InventoryForm = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  const [, { Form, Field }] = createForm<InventoryItem>({
    initialValues: state ?? {
      id: 0,
      count: 1,
      doseNumber: 1,
    },
    validate: zodForm(InventorySchema),
  });

  const handleSubmit: SubmitHandler<InventoryItem> = async values => {
    await saveInventory(values, values.id);
    navigate('/inventory');
  };

  return (
    <Form onSubmit={handleSubmit} shouldDirty={false} keepResponse={true}>
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
            <Field name="id" type="number">
              {(field, props) => <input {...props} type="hidden" />}
            </Field>
            <Field name="name">
              {(field, props) => (
                <>
                  <TextField
                    label="Name"
                    value={field.value || ''}
                    error={field.error}
                    {...props}
                  />
                </>
              )}
            </Field>
            <Field name="kind">
              {(field, props) => (
                <Select
                  label="Kind"
                  error={field.error}
                  options={kinds}
                  {...props}
                  value={field.value || 'Pill'}
                />
              )}
            </Field>
          </section>
          <SectionHeading>Package</SectionHeading>
          <section class="flex items-baseline">
            <Field name={`count`} type="number">
              {(field, props) => (
                <>
                  <TextField
                    {...props}
                    value={field.value}
                    error={field.error}
                    type="number"
                    label="Count"
                  />
                </>
              )}
            </Field>
            <Field name={`doseNumber`} type="number">
              {(field, props) => (
                <TextField
                  {...props}
                  value={field.value}
                  type="number"
                  class="max-w-120px"
                  label="Number of doses"
                  error={field.error}
                />
              )}
            </Field>

            <span class="text-3xl mr-4">x</span>

            <Field name={`dose`} type="number">
              {(field, props) => (
                <TextField
                  {...props}
                  type="number"
                  class="max-w-100px"
                  value={field.value}
                  error={field.error}
                  label="Dose"
                />
              )}
            </Field>
            <Field name={`unit`}>
              {(field, props) => (
                <Select
                  label="Unit"
                  options={units}
                  error={field.error}
                  {...props}
                  value={field.value || 'mg'}
                />
              )}
            </Field>
          </section>
        </main>
      </div>
    </Form>
  );
};

export default InventoryForm;
