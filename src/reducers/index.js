import { combineReducers } from 'redux';
import TweetsFeedReducer from './tweets_feed_reducer.js';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer.js';
import userReducer from './user_reducer.js';

const rootReducer = combineReducers({
	tweets: TweetsFeedReducer,
	form: formReducer,
	auth: authReducer,
	user: userReducer
});

export default rootReducer;
