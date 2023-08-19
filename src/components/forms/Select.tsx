import { For, JSX, Show, splitProps } from 'solid-js';
import FormElementContainer from './FormElementContainer';

type Props = JSX.SelectHTMLAttributes<HTMLSelectElement> & {
  onChange: JSX.ChangeEventHandler<HTMLSelectElement, Event>;
  options: string[];
  error?: string;
  optionLabels?: string[];
  label?: string;
};

const Select = (props: Props) => {
  const [local, other] = splitProps(props, [
    'label',
    'value',
    'options',
    'error',
  ]);

  const handleChoice: JSX.ChangeEventHandler<HTMLSelectElement, Event> = ev => {
    props.onChange(ev);
  };

  return (
    <FormElementContainer error={local.error}>
      <Show when={local.label}>
        <label class="font-600 opacity-80 text-14px">{local.label}</label>
      </Show>
      <div class="flex items-center relative">
        <select
          {...other}
          class="appearance-none border-none outline-none bg-transparent font-inherit text-inherit text-16px py-1 pr-8"
          onChange={handleChoice}
        >
          <For each={local.options}>
            {val => <option selected={val === local.value}>{val}</option>}
          </For>
        </select>
        <div class="i-material-symbols-keyboard-arrow-down absolute right-0 ml-4 text-2xl pointer-events-none" />
      </div>
    </FormElementContainer>
  );
};

export default Select;
