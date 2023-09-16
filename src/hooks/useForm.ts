import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import { AnyZodObject, ZodError } from 'zod';

type Props<T> = {
  initialValues: T;
  schema?: AnyZodObject;
};

export const hasNoKeys = (obj: object) => Object.keys(obj).length === 0;

export const useForm = <T extends object>(props: Props<T>) => {
  const [form, setForm] = createStore(props.initialValues);
  const [errors, setErrors] = createSignal<Partial<Record<keyof T, string>>>(
    {}
  );

  // eslint-disable-next-line solid/reactivity
  const updateFormField = (fieldName: keyof T) => (event: Event) => {
    const inputElement = event.currentTarget as HTMLInputElement;
    if (inputElement.type === 'checkbox') {
      setForm({
        ...form,
        [fieldName]: !!inputElement.checked,
      });
    } else {
      setForm({
        ...form,
        [fieldName]:
          typeof form[fieldName] === 'number'
            ? Number(inputElement.value)
            : inputElement.value,
      });
    }
  };

  const validateForm = () => {
    if (props.schema) {
      try {
        props.schema.parse(form);
        setErrors({});
        return {};
      } catch (e: unknown) {
        if (e instanceof ZodError) {
          const errs = e.errors.reduce<Record<string, string>>((acc, curr) => {
            acc[curr.path.toString()] = curr.message;
            return acc;
          }, {});
          setErrors(errs as object);
          return errs;
        }
      }
    }
  };

  const fieldArgs = (name: keyof T) => ({
    onChange: updateFormField(name),
    onBlur: () => validateForm(),
    error: errors()[name],
  });

  return { form, fieldArgs, validateForm, errors };
};
