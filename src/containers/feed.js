import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import TweetList from './tweet-list.js';
import NovoTweet from './novo-tweet.js';

class Feed extends Component {
	render() {
		return (
			<div>
				<NovoTweet />
      			<TweetList />
      		</div>
		)
	}
}

export default Feed;