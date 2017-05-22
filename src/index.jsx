import ReactDOM from 'react-dom';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';
import {App} from './components/App';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './styles/app.scss';

// function run() {
  ReactDOM.render(
	<MuiThemeProvider muiTheme={theme}>
   		<App />
   	</MuiThemeProvider>,document.getElementById('root')
   	);
// }

// const loadedStates = ['complete', 'loaded', 'interactive'];

// if (loadedStates.includes(document.readyState) && document.body) {
//   run();
// } else {
//   window.addEventListener('DOMContentLoaded', run, false);
// };