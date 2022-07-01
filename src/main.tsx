import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/fonts.css';
import s from './index.module.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className={s.app}>Hello World</div>
  </React.StrictMode>
);
