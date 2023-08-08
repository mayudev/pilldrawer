import { JSX, Show } from 'solid-js';
import FormElementContainer from './FormElementContainer';

type Props = {
  label?: string;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

const TextField = (props: Props) => {
  return (
    <FormElementContainer>
      <Show when={props.label}>
        <label class="font-600 opacity-80 text-14px">{props.label}</label>
      </Show>

      <input
        class={`
  font-inherit outline-none text-inherit text-lg
  bg-inherit border-none
  placeholder:text-slate-4
  b
  `}
        {...props}
        type="text"
      />
    </FormElementContainer>
  );
};

export default TextField;
