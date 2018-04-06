import React , {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signUpAction } from '../actions/index.js';

class FormCadastro extends Component {

	constructor(props) {
		super(props);
		this.state = {
            user: {
                name: '',
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
        const { dispatch } = this.props;
        if (user.name && user.email && user.password) {
            this.props.signUpAction(user);
        }
    }

	render() {
		const { registering  } = this.props;
        const { user, submitted } = this.state;

		return (
			<div className="row" id="form-cad">
				<div className="col-md-12">
					<h1> Cadastro </h1>
					<form  className="form-horizontal"onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="name" className='form'>	Nome:</label>
							<input type="text"
								className="form-control"
								name="name"
								value={user.name}
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email" className="form ">	E-mail:</label>
							<input type="text"
								className="form-control"
								name="email"
								value={user.email}
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password" className="form">	Password:</label>
							<input type="password"
								className="form-control"
								name="password"
								value={user.password}
								onChange={this.handleChange}
							/>
						</div>
						<input type="submit" className="btn btn-success" value="Register" id="btn-register"/>
					</form>
				</div>
				<div className="row" id="login-link">
					<div className="col-xs-12 col-sm-12 col-md-12"> 
						<button className="btn btn-info">Voltar</button>						
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
	errorMessage: state.auth.error,
	sucessMessage: state.auth.sucess
   	};
}

function mapDispatchToProps(dispatch) {
	//Aciona a action enviarTweet e manda os dados
	return bindActionCreators({ enviarTweet }, dispatch);
}

export default connect(mapStateToProps, {signUpAction})(FormCadastro);
