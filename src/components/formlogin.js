import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { signInAction }  from '../actions/index.js';
import { connect } from 'react-redux';

class FormLogin extends Component {

	constructor(props) {
		super(props);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}
		
	handleFormSubmit(props) {
    	this.props.signInAction(props, this.props.history);
  	}

	errorMessage() {
		if (this.props.errorMessage) {
			return (
				<div className="info-red">
					{this.props.errorMessage}
				</div>
			);
		}
	}

	render(){
		const { handleSubmit } = this.props;
		return ( 
			<div className="row" id="form-login">
				<div className="col-md-12">
					<form  className="form-horizontal" onSubmit={ handleSubmit(this.submit) }>
						<Field name="email"
							component="input"
							type="text"
							placeholder="Email"
						/>
						<Field name="password"
							component="input"
							type="password"
							placeholder="Password"
						/>
						<button type="submit" value="Login" id="btn-login">Sign in</button>
					</form>
				</div>
				<div className="row" id="cad-link">
					<div className="col-xs-12 col-sm-12 col-md-12"> 
						<a href="#">Sign Up</a>&nbsp;|&nbsp;<a href="#">Forgot Password</a>						
					</div>
				</div>
			</div>
		);
	}
}
/*
export default reduxForm({
	form: 'login'
})(FormLogin);
*/


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}


const reduxFormLogin = reduxForm({
 	form: 'login'
})(FormLogin);

export default connect(mapStateToProps, {signInAction})(reduxFormLogin);


/* <div className="form-group">
							<label htmlFor="email" className="form ">E-mail:</label>
							<input type='email'  className="form form-control" id="email" placeholder="Enter email" name="email"></input>
						</div>
						<div className="form-group">
							<label htmlFor="senha" className="form">Password:</label>
							<input type='password'  className=" form form-control" id="senha" placeholder="*******" name="senha" ></input>
						</div>
						*/