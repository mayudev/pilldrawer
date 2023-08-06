import { A } from '@solidjs/router';

type Props = {
  icon: string;
  title: string;
  href: string;
};

export const AppMenuItem = (props: Props) => {
  return (
    <A
      class="flex flex-col items-center font-600 p-2 text-15px decoration-none m-1 rounded-lg color-onSecondary color-slate-200"
      activeClass="bg-primary-400! dark:bg-dark-700! dark:text-primary-300"
      href={props.href}
    >
      <div class={`${props.icon} w-[24px] h-[36px]`} />
      <div>{props.title}</div>
    </A>
  );
};
