import { createStore, applyMiddleware } from "redux";
import initialState from "./initialState";
import rootReducer from "./reducers/rootReducer";
import { actionUpdateName, actionUpdateSurname } from "./actionCreators/user";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { initialStateType } from "../types";

export const store = createStore(rootReducer, initialState as any, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
  console.log("log from store - meaning store change", store.getState());
});
// const actionUpdateName = (name) => ({ type: ActionTypes.CHANGE_NAME, payload: name })
store.dispatch(actionUpdateName("yura"));
store.dispatch(actionUpdateSurname("ivanov"));
