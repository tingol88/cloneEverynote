import { actionUpdateNameType, actionUpdateSurnameType } from "../../types";
import {ActionTypes} from "../actionTypes";
// rembember that action mast return obj Action with property type 

export const actionUpdateName = (name:string):actionUpdateNameType => {
  return {
    type: ActionTypes.CHANGE_NAME,
    payload: name,
  }
}
export const actionUpdateSurname = (surname:string):actionUpdateSurnameType => {
  return {
    type: ActionTypes.CHANGE_SURNAME,
    payload: surname
  }
}
