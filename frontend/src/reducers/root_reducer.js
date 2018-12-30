import { combineReducers } from 'redux';
import tweets from './tweets_reducer';
import session from './session_reducer';
import errors from './errors_reducer';

const RootReducer = combineReducers({
  tweets,
  session,
  errors,
});

export default RootReducer;