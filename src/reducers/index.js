import { combineReducers } from 'redux';
import TweetsFeedReducer from './tweets_feed_reducer.js';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer.js';

const rootReducer = combineReducers({
	tweets: TweetsFeedReducer,
	form: formReducer,
	auth: authReducer
});

export default rootReducer;
