import { ParentProps } from 'solid-js';

const FormElementContainer = (props: ParentProps) => (
  <div
    class={`
      inline-flex flex-col
   dark:bg-dark-600 py-2 px-3 rounded-t-md mr-4
   border-b-1px border-b-solid border-b-transparent
   focus-within-border-b-primary-300 transition
    `}
  >
    {props.children}
  </div>
);

export default FormElementContainer;
