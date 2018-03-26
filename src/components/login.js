import React,{Component} from 'react';




import FormLogin from './formlogin';


import FormCad	from './formcad';



class Login extends Component{


	render(){

		return(
				
				<div className="container" id="tela">
				
						<FormLogin/>
				</div>
			);
	}


}


export default Login;