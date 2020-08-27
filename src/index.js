import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { MuiThemeProvider, createMuiTheme, Typography } from '@material-ui/core';

// const muiTheme = createMuiTheme({
//   typography: {
//     useNextVariants: true,
//     fontFamily: "'Lato', sans-serif"
//   }
// });

ReactDOM.render(
  // <React.StrictMode>
  // </React.StrictMode>,
  // <MuiThemeProvider muiTheme={muiTheme}>
  //   <Typography>
  //   </Typography>
  // </MuiThemeProvider>,
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
