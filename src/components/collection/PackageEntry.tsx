import { InventorySchema } from '../../models/InventorySchema';
import Select from '../forms/Select';
import TextField from '../forms/TextField';
import { Field, createForm } from '@modular-forms/solid';

const units = ['mg', 'dose'];

type Props = {
  index: number;
  of: FormStoreType;
};

type FormStoreType = ReturnType<typeof createForm<InventorySchema>>[0];

const PackageEntry = (props: Props) => {
  return (
    <div>
      <Field name={`packages.${props.index}.name`} of={props.of}>
        {(field, props) => (
          <TextField
            value={field.value || ''}
            {...props}
            placeholder="(optional)"
            label="Name"
          />
        )}
      </Field>
      <div class="inline-flex items-center b-l-primary-200 b-l-1px b-l-solid pl-4">
        <Field
          name={`packages.${props.index}.doses`}
          type="number"
          of={props.of}
        >
          {(field, props) => (
            <TextField
              {...props}
              type="number"
              class="w-120px"
              label="Number of doses"
            />
          )}
        </Field>

        <span class="text-3xl mr-4">x</span>

        <Field
          name={`packages.${props.index}.dose`}
          type="number"
          of={props.of}
        >
          {(field, props) => (
            <TextField {...props} type="number" class="w-100px" label="Dose" />
          )}
        </Field>
        <Field name={`packages.${props.index}.unit`} of={props.of}>
          {(field, props) => (
            <Select
              label="Unit"
              options={units}
              {...props}
              value={field.value || 'mg'}
            />
          )}
        </Field>
      </div>
    </div>
  );
};

export default PackageEntry;
