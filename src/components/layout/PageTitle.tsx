import { ParentProps } from 'solid-js';

export const PageTitle = (props: ParentProps) => {
  return <header class="text-4xl m-5 font-500">{props.children}</header>;
};
