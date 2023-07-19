import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import Bookstore from './routers/bookstore';
import Categories from './routers/categories';
import configureStore from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Bookstore />,
  },
  {
    path: '/categories',
    element: <Categories />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
reportWebVitals();
