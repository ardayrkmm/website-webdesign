import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/page/home/home';
import Tentang from './components/page/tentangH/tentang';
import Kategori from './components/page/kategori/kategori';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/tentang',
    element: <Tentang />
  },
  {
    path: '/kategori',
    element: <Kategori />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
