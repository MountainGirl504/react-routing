import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {HashRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";

import store from './store';

ReactDOM.render(
  <HashRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </HashRouter>,
    document.getElementById('root')
);
registerServiceWorker();