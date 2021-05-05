import { combineReducers } from 'redux';
import {notesReducer} from './notesReducer.js';
import userReducer from './userReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  notes: notesReducer
})

export default rootReducer
