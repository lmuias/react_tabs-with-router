import { createRoot } from 'react-dom/client';
import React from 'react';
import { Root } from './router/Root';

createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
