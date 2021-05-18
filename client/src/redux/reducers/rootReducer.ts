import { combineReducers } from 'redux';
import {notesReducer} from './notesReducer.js';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  notes: notesReducer
})

export default rootReducer
export type RootReducerType = typeof rootReducer
