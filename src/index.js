import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Feed from './containers/feed.js';
import Login from './components/login.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
	  		<div>
	  			<Switch>
	  				<Route path="/feed" component={Feed} />	  				
	  				<Route path="/" component={Login} />
	  			</Switch>
	  		</div>
  		</BrowserRouter>
	</Provider>
  	, document.querySelector('.container')
);
