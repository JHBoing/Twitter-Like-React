import React from 'react';
import { Switch, Route } from 'react-router-dom';


const Main = () => {
	
	return (
	 	<main>
			<Switch>
				<Route exact path='/' component={Login}/>
				<Route path='/feed' component={Feed}/>
				<Route path='/perfil' component={Perfil}/>
				<Route path='/conta' component={Conta}/>
				<Route path='/logout' component={Logout}/>
	    	</Switch>
		</main>
	);
};

export default Main;