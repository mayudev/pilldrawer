import { Toolbar } from './components/layout/Toolbar';
import { AppMenu } from './components/layout/AppMenu';
import { Outlet } from '@solidjs/router';

const App = () => {
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
