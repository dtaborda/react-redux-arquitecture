import { combineReducers } from 'redux';

import application from './application_reducer';
import reddit from './reddit_reducer';

const rootReducer = combineReducers({
  application,
  reddit
});

export default rootReducer;
