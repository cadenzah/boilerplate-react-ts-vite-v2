import React from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/index.scss';

import { BrowserRouter } from 'react-router-dom';
import Routes from '@/routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// google analytics
import { initGA } from '@/utils';

initGA();

const rootNode = document.getElementById('root')!;
createRoot(rootNode).render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter
      basename={APP_ENV.IS_GITHUB_PAGE_DEPLOY ? APP_ENV.BASE_URL : ''}
    >
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);
