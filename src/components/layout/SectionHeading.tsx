import { ParentProps } from 'solid-js';

export const SectionHeading = (props: ParentProps) => {
  return (
    <header class="block text-md font-600 pb-3 text-primary-200">
      {props.children}
    </header>
  );
};
