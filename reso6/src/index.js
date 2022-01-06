import React from 'react';
import './index.css';
import App from './Components/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { render } from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline';



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
      <CssBaseline />
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);