import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// ui
import 'semantic-ui-css/semantic.min.css';
// redux
import { Provider } from 'react-redux';
import store from './store'
// all requests use credentials (for sessions)
import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:80/";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
