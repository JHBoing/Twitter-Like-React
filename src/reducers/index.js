import { combineReducers } from 'redux';
import TweetsFeedReducer from './tweets_feed_reducer.js';

const rootReducer = combineReducers({
	tweets: TweetsFeedReducer
});

export default rootReducer;
