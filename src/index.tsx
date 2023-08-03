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

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<div>home</div>} />
          <Route path="reminders" element={<Reminders />} />
          <Route path="inventory" element={<Inventory />} />
        </Route>
        <Route path="*" element={<Navigate href="/" />} />
      </Routes>
    </Router>
  ),
  root!
);
