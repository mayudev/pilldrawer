import { JSX, Show, createMemo, splitProps } from 'solid-js';
import FormElementContainer from './FormElementContainer';

type Props = {
  label?: string;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

const TextField = (props: Props) => {
  const [local, other] = splitProps(props, ['class']);

  const getValue = createMemo<number | undefined>(prevValue =>
    !Number.isNaN(props.value) ? Number(props.value) : prevValue
  );

  return (
    <FormElementContainer class={local.class}>
      <Show when={props.label}>
        <label class="font-600 opacity-80 text-14px">{props.label}</label>
      </Show>

      <input
        {...other}
        {...(props.type === 'number'
          ? {
              type: 'number',
              value: getValue(),
            }
          : {
              type: 'text',
            })}
        class={`
  font-inherit outline-none text-inherit text-lg
  bg-inherit border-none
  placeholder:text-slate-4
  b
  `}
      />
    </FormElementContainer>
  );
};

export default TextField;
