import { combineReducers } from 'redux';
import {notesReducer} from './notesReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  notes: notesReducer
})

export default rootReducer
export type RootReducerType = typeof rootReducer
