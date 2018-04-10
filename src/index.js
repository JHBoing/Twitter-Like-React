import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { HashRouter, Route, Switch} from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import Feed from './components/feed.js';
import Login from './components/login.js';
import Cadastro from './components/formCadastro.js';
import Conta from './components/conta.js';
import requerAutenticacao from './components/com-autenticacao.js';
import naoRequerAutenticacao from './components/sem-autenticacao.js';

import { AUTENTICADO } from './actions/index.js';
import { history } from './helpers/history.js';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

//busca o token no localStorage do browser
const token = localStorage.getItem('user');

//Verifica se o token = true, se sim, renderiza outras paginas

if (token) {
	store.dispatch({ type: AUTENTICADO });
	history.push('/feed');
}


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<HashRouter history={history}>
	  		<div>
	  			<Switch>
	  				<Route path="/feed" component={Feed} />
	  				<Route path="/signup" component={Cadastro} />
	  				<Route path="/conta" component={Conta} />	  				
	  				<Route path="/" component={Login} />
	  			</Switch>
	  		</div>
  		</HashRouter>
	</Provider>
  	, document.querySelector('.container')
);


/*

<Route path="/feed" component={requerAutenticacao(Feed)} />
	  				<Route path="/signup" component={naoRequerAutenticacao(Cadastro)} />	  				
	  				<Route path="/" component={naoRequerAutenticacao(Login)} />

	  				*/