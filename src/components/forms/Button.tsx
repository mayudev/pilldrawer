import { JSX, ParentProps, splitProps } from 'solid-js';

type Props = ParentProps &
  JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
    circular?: boolean;
    title?: string;
  };

export const Button = (props: Props) => {
  const [local, others] = splitProps(props, ['children', 'title', 'circular']);
  return (
    <button
      title={local.title}
      class={`outline-none border-none font-inherit text-16px 
      font-600 rounded-lg
      bg-secondary text-black 
      dark:bg-dark-500 dark:text-primary-300 
      dark:hover:bg-dark-400 
      transition
      dark:active:bg-dark-500
      ${
        local.circular
          ? 'rounded-[50%]! w-48px h-48px flex items-center justify-center'
          : 'px-4 py-3 '
      }
      `}
      {...others}
    >
      {local.children}
    </button>
  );
};

export default Button;
