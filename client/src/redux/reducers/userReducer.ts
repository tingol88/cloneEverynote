import { actionUpdateNameType, actionUpdateSurnameType, UserType } from "../../types";
import { ActionTypes } from "../actionTypes";

const userReducer = (state:UserType|{} = {}, action:actionUpdateNameType|actionUpdateSurnameType) => {
  switch (action.type) {
    case ActionTypes.CHANGE_NAME:
      return { ...state, name: action.payload }
    case ActionTypes.CHANGE_SURNAME:
      return {
        ...state, surname: action.payload
      }
    default:
      return { ...state }
  }
}

export default userReducer
