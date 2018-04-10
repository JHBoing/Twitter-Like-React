import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import SearchBar from './search-bar';
import { connect } from 'react-redux';
import { logoutAction } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class Navbar extends Component {

	//Chama o construtor primeiro ao criar o componente,
	//apenas o construtor pode manipular o state
	constructor(props) {
		super(props);
		//Qual states serao utilizados? Usuario... e imagem dele?
		this.state = { usuario: ''};
		this.handleLogout = this.handleLogout.bind(this);
	}
	//Render nada mais é do que um metodo que ira definir como a classe/componente é renderizada
	//É o template do vue?
	handleLogout() {
		this.props.logoutAction();
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar bg-light">
					<Link to='/feed' className="navbar-brand">
						Twitter
					</Link>
					<SearchBar />
					<button className="navbar-toggler collaps" type="button" data-toggle="collapse" 
						data-target="#navbarTwitter" aria-controls="navbarTwitter" aria-expanded="false" aria-label="Expande menu">
			        	<span className="navbar-toggler-icon"></span>
			      	</button>
			      	<div className="navbar-collapse collapsed" id="navbarTwitter">			      		
			      		<ul className="navbar-nav">
			      			<li className="nav-item dropdown pull-right">
			      				<a className="nav-link dropdown-toggle" id="dropdownUsuario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			      					Opcoes
			      				</a>
			      				<div className="dropdown-menu">
			      					<Link to='/perfil' className="dropdown-item">Perfil</Link>
			      					<Link to='/conta' className="dropdown-item">Conta</Link>
			      					<a className="dropdown-item" onClick={this.handleLogout}>Sair</a>
			      				</div>
			      			</li>
			      		</ul>
			      	</div>
				</nav>
			</div>
		);
	}
}


function mapDispatchToProps(dispatch) {
	//Aciona a action enviarTweet e manda os dados
	return bindActionCreators({ logoutAction }, dispatch);
}
// Faz a conexao do componente(container) ao redux, mapeando os props e mandando para as actions
export default connect(null, mapDispatchToProps)(Navbar);