import { ActionTypes } from "./redux/actionTypes";
// писал по другой db
// export type NoteType = {
//   id: string;
//   title: string;
//   content: string;
//   createdAt: Date;
//   updatedAt?: Date;
//   notebook: NotebookType;
// };
export type NoteType = {
  _id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  category: string;
  notebook: string[];
};
export type NotebookType = {
  _id: string;
  title: string;
  createdAt: Date;
  notes: Array<NoteType["_id"]>;
};
export type UserType = {
  createdAt: Date;
  email: string;
  id: string;
  isConfirmed: boolean;
  name: string;
  surname: string;
};

// store
export type typeofActionType = string;

export type initialStateType = {
  user: UserType | {};
  notes: Array<NoteType> | [];
};

// actions
export type actionUpdateNameType = {
  type: typeof ActionTypes.CHANGE_NAME;
  payload: string;
};

export type actionUpdateSurnameType = {
  type: typeof ActionTypes.CHANGE_SURNAME;
  payload: string;
};
