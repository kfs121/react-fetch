import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/common.scss';
import './scss/index.scss';
import Header from './Header';
import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="wrap">
      <Header></Header>
      <Main></Main>
    </div>
  </React.StrictMode>
);
