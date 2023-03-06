import React from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/index.scss';

import { BrowserRouter } from 'react-router-dom';
import Routes from '@/routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from '@/components/Navigation';

// google analytics
import { initGA } from '@/utils';

initGA();

const rootNode = document.getElementById('root')!;
createRoot(rootNode).render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Navigation />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);