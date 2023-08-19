import { ParentProps } from 'solid-js';

type Props = ParentProps & {
  class?: string;
  error?: string;
};

const FormElementContainer = (props: Props) => (
  <div
    class={`
      inline-flex flex-col w-fit 
   dark:bg-dark-600 py-2 px-3 rounded-t-md mr-4
   border-b-1px border-b-solid border-b-transparent
   focus-within-border-b-primary-300 transition ${props.class}
    `}
  >
    {props.children}
    {props.error && <div class="text-sm font-600 text-red3">{props.error}</div>}
  </div>
);

export default FormElementContainer;
