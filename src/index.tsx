import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import './i18n';

import './index.css';
import './styles/normalize.scss';
import './styles/global.module.scss';
import './styles/colors.scss';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </React.StrictMode>
  </BrowserRouter>
);
