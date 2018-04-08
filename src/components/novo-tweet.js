import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enviarTweet } from '../actions/index';

class NovoTweet extends Component {

	constructor(props) {
		super(props);

		this.state = { texto: '' };
		//"Binda" essa função ao contexto do componente NovoTweet 
		//de modo que o this.setState funcione
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	//Modifica o state conforme texto digitado na textarea
	onInputChange(event) {
		this.setState({texto: event.target.value})
	}

	//Ao pressionar o botão ou apertar enter, evita o que normalmente aconteceria
	//e chama uma action
	onFormSubmit(event) {
		event.preventDefault();
		//manda pras actions a informação do texto e do usuario
		this.props.enviarTweet(this.state.texto, this.state.usuario);
		this.setState({ texto: '' });
	}

	render() {
		return (
			<div>
				<form
					onSubmit={this.onFormSubmit} 
					className="input-group"
				>
					<textarea
						rows="4"
						cols="50"
						placeholder="Aprender React é divertido, comente sobre: "
						className="form-control"
						value={this.state.texto}
						onChange={this.onInputChange}
					>						
					</textarea>
					<span className="input-group-append">
						<button type="submit" className="btn btn-success">Enviar</button>
					</span>
				</form>
			</div>
		);
	}
}

function mapStateToProps({ usuario }) {
	//Teoricamente irá trazer as informações do state "usuario" e vai passar como props pro componente
	return { usuario };
}


function mapDispatchToProps(dispatch) {
	//Aciona a action enviarTweet e manda os dados
	return bindActionCreators({ enviarTweet }, dispatch);
}
// Faz a conexao do componente(container) ao redux, mapeando os props e mandando para as actions
export default connect(mapStateToProps, mapDispatchToProps)(NovoTweet);