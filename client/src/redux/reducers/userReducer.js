import { ActionTypes } from "../actionTypes.js";

const userReducer = (state = {}, action) => {
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
