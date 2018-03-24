import React, { Component } from 'react';

//Class -> state
class SearchBar extends Component {

	//Chama o construtor primeiro ao criar o componente,
	//apenas o construtor pode manipular o state
	constructor(props) {
		super(props);
		this.state = { termo: ''};
	}
	//Render nada mais é do que um metodo que ira definir como a classe/componente é renderizada
	//É o template do vue? R: basicamente sim
	render() {
		return (
			<div>
				<input 
				className="form-control input-lg"
				placeholder="Pesquisa"
				value = {this.state.term}
				onChange={event => this.setState({ term: event.target.value })}
				></input>
			</div>
		);
	}
}

export default SearchBar;