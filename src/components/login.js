import React, {Component} from 'react';

import Logo	from './Logoimg';
import FormLogin from './formlogin';

class Login extends Component{

	render() {
		return(
			<div className="container" id="tela">
				<Logo/>
				<FormLogin/>
			</div>
		);
	}
}

export default Login;