import React, {Component} from 'react';
import { signInAction }  from '../actions/index.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class FormLogin extends Component {

	constructor(props) {
		super(props);

		this.state = {
            user: {
            	email: '',
            	password: ''
            },
            submitted: false
        };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
		
	handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.email && user.password) {
            this.props.signInAction(user);
        }
    }

	render() {
		const errorMessage = this.props;
        const { user, submitted } = this.state;

		return ( 
			<div>
				<div className="signin">
					<form className="form-signin" onSubmit={this.handleSubmit} >
					<h1>Login</h1>
						<div className="form-group">
							<label htmlFor="email">Email:</label>
							<input type="text"
								className="form-control"
								name="email"
								value={user.email}
								onChange={this.handleChange}
							/>
							{submitted && !user.email &&
								<div className="help-block text-danger">O email é necessario.</div>
							}
						</div>
						<div className="form-group">
							<label htmlFor="password">Senha:</label>
							<input type="password"
								className="form-control"
								name="password"
								value={user.password}
								onChange={this.handleChange}
							/>
							{submitted && !user.password &&
								<div className="help-block text-danger">A senha é necessaria.</div>
							}
						</div>
						{submitted && errorMessage &&
								<div className="help-block text-danger">Erro ao realizar o login.</div>
						}
						<div>
							<button type="submit" className="btn btn-info" value="login">Login</button>&nbsp;
							<Link to="/signup" className="btn btn-info">Cadastro</Link>	
						</div>
					</form>
				</div>
			</div>
		);
	}
}



function mapStateToProps(state) {
	if (state.auth.error) {
		const errorMessage = state.auth.error;
		return errorMessage;
	}
 	return state;
}

function mapDispatchToProps(dispatch) {
	console.log(dispatch);
	return bindActionCreators({ signInAction }, dispatch);
}

export default connect(mapStateToProps, {signInAction})(FormLogin);