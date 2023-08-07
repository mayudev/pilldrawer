/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Routes, Route, Navigate } from '@solidjs/router';

import './index.css';
import 'virtual:uno.css';
import '@fontsource/nunito';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';

import App from './App';
import Reminders from './pages/Reminders';
import Inventory from './pages/Inventory';
import InventoryForm from './pages/InventoryForm';
import { process } from '@tauri-apps/api';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
  );
}

document.documentElement.addEventListener('keydown', key => {
  if (key.ctrlKey && key.code === 'KeyQ') {
    process.exit(0);
  }
});

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<div>home</div>} />
          <Route path="reminders" element={<Reminders />} />
          <Route path="inventory/add" element={<InventoryForm />} />
          <Route path="inventory" element={<Inventory />} />
        </Route>
        <Route path="*" element={<Navigate href="/" />} />
      </Routes>
    </Router>
  ),
  root!
);
