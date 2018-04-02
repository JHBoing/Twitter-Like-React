import React, { Component } from 'react';

import TweetList from './tweet-list.js';
import NovoTweet from './novo-tweet.js';
import Navbar from './navbar.js';

class Feed extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<NovoTweet />
      			<TweetList />
      		</div>
		)
	}
}

export default Feed;