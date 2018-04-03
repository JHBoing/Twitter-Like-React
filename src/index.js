import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { HashRouter, Route, Switch} from 'react-router-dom';

import Feed from './components/feed.js';
import Login from './components/login.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

//busca o token no localStorage do browser
//const token = localStorage.getItem('token');

//Verifica se o token = true, se sim, renderiza outras paginas
/*
if (token) {
	store.dispatch({ type: AUTENTICADO });
}
*/

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<HashRouter>
	  		<div>
	  			<Switch>
	  				<Route path="/feed" component={Feed} />	  				
	  				<Route path="/" component={Login} />
	  			</Switch>
	  		</div>
  		</HashRouter>
	</Provider>
  	, document.querySelector('.container')
);
