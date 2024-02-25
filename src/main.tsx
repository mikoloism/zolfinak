import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import './libs/polyfill/mod';

import { defineCustomElements } from '@ionic/pwa-elements/loader';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

defineCustomElements(window);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
