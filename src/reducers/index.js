import { combineReducers } from 'redux';

import NewDeckReducer from './reducer_new_deck';

const rootReducer = combineReducers({
  decks: NewDeckReducer
});

export default rootReducer;
