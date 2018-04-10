import React , {Component} from 'react';
import { connect } from 'react-redux';
import { getConta, atualizaConta } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class FormConta extends Component {

	constructor(props) {
		super(props);
		this.state = {
            user: {
                name: '',
                username: '',
                email: '',
                password: '',
                id: ''
           	},
           	submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		this.props.getConta();
	}

	componentWillReceiveProps(props) {
		console.log(props.user);
		this.setState({
			user: {
				name: props.usuario.name,
				username: props.usuario.username,
				email: props.usuario.email,
				id: props.usuario.id
			}
		});
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
        if (user.name && user.username && user.email) {
            this.props.atualizaConta(user);
        }
    }

	render() {
		const errorMessage = this.props;
        const { user, submitted } = this.state;

		return (
			<div className="row" id="form-cad">
				<div className="col-md-12">
					<h1> Editar Conta </h1>
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
							<input type="email"
								className="form-control"
								name="email"
								value={user.email}
								onChange={this.handleChange}
							/>
							{submitted && !user.email &&
								<div className="help-block text-danger">O email é necessario.</div>
							}
						</div>
						<input type="submit" className="btn btn-success" value="Editar" id="btn-register"/>
					</form>
				</div>
				<br/>
				<div className="row" id="login-link" style={{padding:'10px'}}>
					<div className="col-xs-12 col-sm-12 col-md-12"> 
						<Link to='/feed' className="btn btn-info">Voltar</Link>						
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
 	return {
 		usuario: state.user
 	};
}

function mapDispatchToProps(dispatch) {
	//Aciona a action enviarTweet e manda os dados
	return bindActionCreators({getConta, atualizaConta}, dispatch);
}

export default connect(mapStateToProps, {getConta, atualizaConta})(FormConta);