import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import SearchBar from './search-bar';

class Navbar extends Component {

	//Chama o construtor primeiro ao criar o componente,
	//apenas o construtor pode manipular o state
	constructor(props) {
		super(props);
		//Qual states serao utilizados? Usuario... e imagem dele?
		this.state = { usuario: ''};
	}
	//Render nada mais é do que um metodo que ira definir como a classe/componente é renderizada
	//É o template do vue?
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<a className="navbar-brand">
						{/* <!--imagem--> Olha a doença que é fazer um comentario dentro do JSX*/}
						Twitter
					</a>
					<SearchBar />
					<button className="navbar-toggler collaps" type="button" data-toggle="collapse" 
						data-target="#navbarTwitter" aria-controls="navbarTwitter" aria-expanded="false" aria-label="Expande menu">
			        	<span className="navbar-toggler-icon"></span>
			      	</button>
			      	<div className="navbar-collapse collapsed pull-right" id="navbarTwitter">			      		
			      		<ul className="navbar-nav">
			      			<li className="nav-item imagem-usuario">
			      				<Link to='/feed' className="nav-link">imagemLegal</Link>
			      			</li>
			      			<li className="nav-item dropdown">
			      				<a className="nav-link dropdown-toggle" id="dropdownUsuario" data-toggle="dropdown" aria-haspopup="true" area-expanded="false">
			      				{/*	{usuario} State que ganhara valor apos login do usuario */} PLACEHOLDER
			      				</a>
			      				<div className="dropdown-menu">
			      					<Link to='/perfil' className="dropdown-item">Perfil</Link>
			      					<Link to='/conta' className="dropdown-item">Conta</Link>
			      					<Link to='/logout' className="dropdown-item">Sair</Link>
			      				</div>
			      			</li>
			      		</ul>
			      	</div>
				</nav>
			</div>
		);
	}
}
export default Navbar;