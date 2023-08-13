import { useNavigate } from '@solidjs/router';
import Button from '../components/forms/Button';
import { PageTitle } from '../components/layout/PageTitle';
import TextField from '../components/forms/TextField';
import { DrugKind, getEnumKeys } from '../models/InventoryItem';
import Select from '../components/forms/Select';
import { SectionHeading } from '../components/layout/SectionHeading';
import { SubmitHandler, createForm } from '@modular-forms/solid';
import { InventorySchema } from '../models/InventorySchema';
import { saveInventory } from '../services/inventoryService';

const kinds = getEnumKeys(DrugKind);

const units = ['mg', 'dose'];

const InventoryForm = () => {
  const navigate = useNavigate();

  const [form, { Form, Field }] = createForm<InventorySchema>({
    initialValues: {},
  });

  const navigateBack = () => navigate('/inventory');

  const handleSubmit: SubmitHandler<InventorySchema> = async values => {
    console.dir(values);
    await saveInventory(values, 0);
    navigateBack();
  };

  return (
    <Form onSubmit={handleSubmit} shouldDirty={false} keepResponse={true}>
      <div>
        <div class="flex items-center mx-4">
          <Button circular onClick={navigateBack} title="Return">
            <div class="i-material-symbols-arrow-back text-2xl" />
          </Button>
          <PageTitle>Add new item</PageTitle>
          <span class="flex-1" />
          <Button>Save</Button>
        </div>
        <main class="my-2 mx-4 ">
          <SectionHeading>Details</SectionHeading>
          <section class="pb-6">
            <Field name="name">
              {(field, props) => (
                <TextField label="Name" value={field.value || ''} {...props} />
              )}
            </Field>
            <Field name="kind">
              {(field, props) => (
                <Select
                  label="Kind"
                  options={kinds}
                  {...props}
                  value={field.value || 'Pill'}
                />
              )}
            </Field>
          </section>
          <SectionHeading>Package</SectionHeading>
          <section class="flex items-center">
            <Field name={`count`} type="number">
              {(field, props) => (
                <TextField
                  {...props}
                  type="number"
                  class="max-w-50px"
                  label="Count"
                />
              )}
            </Field>
            <Field name={`doseNumber`} type="number">
              {(field, props) => (
                <TextField
                  {...props}
                  type="number"
                  class="max-w-120px"
                  label="Number of doses"
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
                  label="Dose"
                />
              )}
            </Field>
            <Field name={`unit`}>
              {(field, props) => (
                <Select
                  label="Unit"
                  options={units}
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
