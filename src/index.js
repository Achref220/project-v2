import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './App/store';
import ScrollToTop from './components/ScrollToTop ';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop>
      <App />
      </ScrollToTop>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


