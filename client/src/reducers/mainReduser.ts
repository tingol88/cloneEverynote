import { initialStateType, UserType, NoteType} from "../types";

function mainReduser(state: initialStateType, action: { type: string, payload?: {user?: UserType | {},
notes?: Array<NoteType> | [];
} }) {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, user: action.payload };
    default:
      return { ...state };
  }
}
export default mainReduser;
