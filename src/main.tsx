import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
