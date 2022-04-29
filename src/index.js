import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/* User-written Apps and utilities */
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>
	, document.getElementById('root'));