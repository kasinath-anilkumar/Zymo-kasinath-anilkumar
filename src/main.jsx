import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Adjust this import as necessary
import {LocationProvider} from "./Context/Location"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <LocationProvider>
      <App />
    </LocationProvider>
  </BrowserRouter>
);
