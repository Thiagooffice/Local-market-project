import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routers from './Routes/Routes'



ReactDOM.render(
  <React.StrictMode>
    <Routers/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

