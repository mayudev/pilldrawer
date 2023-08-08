import { For, JSX, Show } from 'solid-js';
import FormElementContainer from './FormElementContainer';

type Props = {
  value: string;
  onChange(val: string): void;

  options: string[];
  optionLabels?: string[];
  label?: string;
};

const Select = (props: Props) => {
  const handleChoice: JSX.ChangeEventHandler<HTMLSelectElement, Event> = ev => {
    props.onChange(ev.currentTarget.value);
  };

  return (
    <FormElementContainer>
      <Show when={props.label}>
        <label class="font-600 opacity-80 text-14px">{props.label}</label>
      </Show>
      <div class="flex items-center relative">
        <select
          class="appearance-none border-none outline-none bg-transparent font-inherit text-inherit text-16px py-1 pr-8"
          onChange={handleChoice}
        >
          <For each={props.options}>
            {val => <option selected={val === props.value}>{val}</option>}
          </For>
        </select>
        <div class="i-material-symbols-keyboard-arrow-down absolute right-0 ml-4 text-2xl pointer-events-none" />
      </div>
    </FormElementContainer>
  );
};

export default Select;
