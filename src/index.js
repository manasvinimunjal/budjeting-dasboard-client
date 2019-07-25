import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import './index.css';
import AppRouter from './routes/AppRouter';
function App() {
    return (
      <React.Fragment>
      <h4>Coding Cats Budgeting Dashboard</h4>
      <Home />
      </React.Fragment>
    );
  }
  
  const rootElement = document.getElementById("root");

ReactDOM.render(
    <AppRouter />
 , document.getElementById('root'));

