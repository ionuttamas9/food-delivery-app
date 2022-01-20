import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactNotifications from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ReactNotifications/>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
