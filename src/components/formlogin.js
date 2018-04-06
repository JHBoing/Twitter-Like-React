import React, {Component} from 'react';
import { signInAction }  from '../actions/index.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FormLogin extends Component {

	constructor(props) {
		super(props);

		this.state = {
            email: '',
            password: '',
            submitted: false
        };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
		
	handleChange(event) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            this.props.signInAction(email, password);
        }
    }

	render() {
		const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;

		return ( 
			<div className="row" id="form-login">
				<div className="col-md-12">
					<form className="form-horizontal" onSubmit={this.handleFormSubmit} >
						<div className="form-group">
							<label htmlFor="email" className='form'>Nome:</label>
							<input type="text"
								className="form-control"
								name="email"
								value={email}
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password" className='form'>Senha:</label>
							<input type="password"
								className="form-control"
								name="password"
								value={password}
								onChange={this.handleChange}
							/>
						</div>
						<div>
							<button type="submit" className="btn btn-info" value="login" id="btn-login">Login</button>
							<Link to="/signup" className="btn btn-info" id="btn-login">Cadastro</Link>	
						</div>
					</form>
				</div>
			</div>
		);
	}
}



function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

function mapDispatchToProps(dispatch) {
	//Aciona a action enviarTweet e manda os dados
	return bindActionCreators({ enviarTweet }, dispatch);
}

export default connect(mapStateToProps, {signInAction})(FormLogin);