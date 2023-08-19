import { JSX, Show, splitProps } from 'solid-js';
import FormElementContainer from './FormElementContainer';

type Props = {
  label?: string;
  error?: string;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

const TextField = (props: Props) => {
  const [local, other] = splitProps(props, ['class']);

  return (
    <FormElementContainer error={props.error} class={local.class}>
      <Show when={props.label}>
        <label class="font-600 opacity-80 text-14px truncate">
          {props.label}
        </label>
      </Show>

      <input
        error="asdf"
        {...other}
        {...(props.type === 'number'
          ? {
              type: 'number',
            }
          : {
              type: 'text',
            })}
        class={`
  font-inherit outline-none text-inherit text-lg
  bg-inherit border-none w-100%
  placeholder:text-slate-4
  
  `}
      />
    </FormElementContainer>
  );
};

export default TextField;
