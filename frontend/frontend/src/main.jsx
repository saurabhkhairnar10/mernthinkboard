import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router";
import Router from './router/Router.jsx';
import React from 'react'
// let router = createBrowserRouter();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
