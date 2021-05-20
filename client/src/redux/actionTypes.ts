type ActionFor = {
  [key:string]: string,
}
export const ActionTypes:ActionFor = {
  CHANGE_NAME: "CHANGE_NAME",
  CHANGE_SURNAME: "CHANGE_SURNAME",
}

 export const ActionNoteTypes: ActionFor = {
  CREATE_NOTE: "CREATE_NOTE",
  DELETE_NOTE: "DELETE_NOTE",
  EDIT_NOTE: "EDIT_NOTE",
  SET_NOTES: "SET_NOTES",
}
