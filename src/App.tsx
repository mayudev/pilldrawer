import { Toolbar } from './components/layout/Toolbar';
import { AppMenu } from './components/layout/AppMenu';
import { Outlet } from '@solidjs/router';
import { onMount } from 'solid-js';

const App = () => {
  onMount(() => {
    // Theme code
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      console.log('asdf');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  return (
    <div class="flex flex-col h-screen">
      <Toolbar />
      <div class="flex grow">
        <AppMenu />
        <div class="grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
