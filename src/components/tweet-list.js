import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { atualizaTweet } from '../actions/index';

class TweetList extends Component {
	//Key pode ser o id? O que pode servir como key? A key tem que ser unica
	//A propria mensagem pode servir provisoriamente como key até ter dados reais
	//pega o props(que é um array) e mapeia(como se fosse um for iterando ele)

	renderTweetList() {
		console.log(this.props.tweets[0]);
		return this.props.tweets.map((post, index) => {
			return (
				<div className="list-group-item" key={index}>
					<li>mensagem</li>
				</div>
			);
		});
	}

	componentDidMount() {
		this.props.atualizaTweet();
	}

	render() {
		return (
			<div>
				<ul className="list-group">
					{this.renderTweetList()}				
				</ul>
			</div>
		);
	}
}

//Pega do state e transforma em props pro componente
function mapStateToProps(state) {
	return {
		tweets: state.tweets,
	};
}

function mapDispatchToProps(dispatch) {
	//Aciona a action enviarTweet e manda os dados
	return bindActionCreators({ atualizaTweet }, dispatch);
}

// Faz a conexao do componente(container) ao redux, mapeando os props e mandando para as actions
export default connect(mapStateToProps, mapDispatchToProps)(TweetList);