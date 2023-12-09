/* eslint-disable no-unused-vars */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import Routes from './routes/routes';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes />
  </Router>
);
