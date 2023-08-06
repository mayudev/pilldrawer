import { defineConfig } from 'unocss/vite';
import { presetUno, presetIcons } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  rules: [
    [
      'grid-rows-3-full',
      {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    ],
  ],
  theme: {
    colors: {
      primary: '#1785C4',
      'primary-400': '#c7eafb',
      secondary: 'rgb(230, 247, 255)',
      onSecondary: '#09293C',
      dark: '#1a1b1e',
      'primary-300': '#82d8ff',
      'dark-400': '#414956',
      'dark-500': '#30353d',
      'dark-700': '#17191c',
      'dark-800': '#101316',
    },
  },
});
