import {ActionTypes} from "../actionTypes.js";
// rembember that action mast return obj Action with property type 

export const actionUpdateName = (name) => {
  return {
    type: ActionTypes.CHANGE_NAME,
    payload: name,
  }
}
export const actionUpdateSurname = (surname) => {
  return {
    type: ActionTypes.CHANGE_SURNAME,
    payload: surname
  }
}
