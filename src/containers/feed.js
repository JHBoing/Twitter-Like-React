import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import TweetList from './tweet-list.js';

class Feed extends Component {
	render() {
		return (
			<div>
      			<TweetList />
      		</div>
		)
	}
}

export default Feed;