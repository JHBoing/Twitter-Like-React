import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { atualizaTweet } from '../actions/index';

class TweetList extends Component {

	renderTweetList() {
		return this.props.tweets.map((tweets, index) => {
			return (
				<div className="list-group-item" key={index}>
					<li>{tweets.post}</li>
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