import { useNavigate } from '@solidjs/router';
import Button from '../components/forms/Button';
import { PageTitle } from '../components/layout/PageTitle';
import TextField from '../components/forms/TextField';
import { DrugKind, getEnumKeys } from '../models/InventoryItem';
import Select from '../components/forms/Select';
import { SectionHeading } from '../components/layout/SectionHeading';
import PackageEntry from '../components/collection/PackageEntry';
import { SubmitHandler, createForm } from '@modular-forms/solid';
import { InventorySchema } from '../models/InventorySchema';
import { For } from 'solid-js';

const kinds = getEnumKeys(DrugKind);

const InventoryForm = () => {
  const navigate = useNavigate();

  const [form, { Form, Field, FieldArray }] = createForm<InventorySchema>({
    initialValues: {
      packages: [{}],
    },
  });

  const navigateBack = () => navigate('/inventory');

  const handleSubmit: SubmitHandler<InventorySchema> = values => {
    console.dir(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
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

            <input type="submit" />
          </section>
          <section>
            <SectionHeading>Packages</SectionHeading>

            <FieldArray name="packages">
              {fieldArray => (
                <For each={fieldArray.items}>
                  {(_, index) => <PackageEntry index={index()} of={form} />}
                </For>
              )}
            </FieldArray>
          </section>
        </main>
      </div>
    </Form>
  );
};

export default InventoryForm;
