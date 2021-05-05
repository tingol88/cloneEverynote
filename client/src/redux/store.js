import { createStore } from "redux";
import initialState from "./initialState.js";
import rootReducer from "./reducers/rootReducer.js";
import {actionUpdateName, actionUpdateSurname} from './actionCreators/user.js'





export const store = createStore(rootReducer, initialState)

store.subscribe(() => {
  console.log(store.getState());
})
// const actionUpdateName = (name) => ({ type: ActionTypes.CHANGE_NAME, payload: name })
store.dispatch(actionUpdateName("yura"))
store.dispatch(actionUpdateSurname('ivanov'))


