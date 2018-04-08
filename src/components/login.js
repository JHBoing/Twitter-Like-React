import React, {Component} from 'react';

import FormLogin from './formlogin';

class Login extends Component{

	render() {
		return(
			<div className="text-center">
				<FormLogin/>
			</div>
		);
	}
}

export default Login;