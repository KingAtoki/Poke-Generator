import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import store from './redux/store';
import App from './App';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F93318', // red
      light: '#FFF933', // yellow
      black: '#000000'
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
