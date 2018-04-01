import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TweetList extends Component {
	//Key pode ser o id? O que pode servir como key? A key tem que ser unica
	//A propria mensagem pode servir provisoriamente como key até ter dados reais
	//pega o props(que é um array) e mapeia(como se fosse um for iterando ele)
	renderTweetList() {
		return this.props.tweets.map((tweet) => {
			return (
				<div className="list-group-item">
					<li 
						key={tweet.mensagem}
						onClick={() => this.props.selectTweet(tweet)}
					>{tweet.mensagem}</li>
				</div>
			);
		});
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

// Faz a conexao do componente(container) ao redux, mapeando os props e mandando para as actions
export default connect(mapStateToProps)(TweetList);