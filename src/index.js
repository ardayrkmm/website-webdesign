import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DetailM from './components/page/Detail_manusia/Detailmanusia'
import DetailA from './components/page/Detail_artefetak/DetailArtefetak'
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import Home from './components/page/hm/home';
import Detail_Hewan from './components/page/Detail_hewan/DetailHewan';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/detailM',
    element: <DetailM />
  },
  {
    path: '/detailA',
    element: <DetailA />
  },
  {
    path: '/detailH',
    element: <Detail_Hewan />
  },

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
