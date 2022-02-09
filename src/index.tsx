import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { Provider } from 'react-redux';

import './index.css';
import './theme/theme.css';
import { themeMui } from './theme/material-ui.theme';
import { store } from './reducers';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={themeMui}>
      <StylesProvider injectFirst>
        <Provider store={store}>
              <App />
        </Provider>
      </StylesProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
