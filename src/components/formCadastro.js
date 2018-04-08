import React , {Component} from 'react';
import { connect } from 'react-redux';
import { signUpAction } from '../actions/index.js';

class FormCadastro extends Component {

	constructor(props) {
		super(props);
		this.state = {
            user: {
                name: '',
                username: '',
                email: '',
                password: ''
           	},
           	submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//Sempre que um campo mudar, modifica o state equivalente
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

    //Envia os dados pras action creators
    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.name && user.email && user.password) {
            this.props.signUpAction(user);
            this.setState({
	            user: {
	                ...user,
	                [name]: '',
	            }
        	});
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
							{submitted && !user.name &&
								<div className="help-block text-danger">O nome é necessario.</div>
							}
						</div>
						<div className="form-group">
							<label htmlFor="username" className='form'>	Username:</label>
							<input type="text"
								className="form-control"
								name="username"
								value={user.username}
								onChange={this.handleChange}
							/>
							{submitted && !user.username &&
								<div className="help-block text-danger">O username é necessario.</div>
							}
						</div>
						<div className="form-group">
							<label htmlFor="email" className="form ">	E-mail:</label>
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
							<label htmlFor="password" className="form">	Password:</label>
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
   	};
}

function mapDispatchToProps(dispatch) {
	//Aciona a action enviarTweet e manda os dados
	return bindActionCreators({ signUpAction }, dispatch);
}

export default connect(mapStateToProps, {signUpAction})(FormCadastro);
