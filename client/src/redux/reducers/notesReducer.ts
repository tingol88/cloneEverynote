import {
  actionCreateNoteType,
  actionDeleteNoteType,
  actionEditNoteType,
  NoteType,
} from "../../types";
import { ActionNoteTypes } from "../actionTypes";

export const notesReducer = (
  notes: Array<NoteType> = [],
  action: actionCreateNoteType | actionEditNoteType | actionDeleteNoteType
) => {
  switch (action.type) {
    case ActionNoteTypes.SET_NOTES:
      return action.payload;
    case ActionNoteTypes.CREATE_NOTE:
      return [...notes, action.payload];
    case ActionNoteTypes.EDIT_NOTE:
      const filtredNotes = notes.filter(
        (note) => action.payload._id !== note._id
      );
      return [...filtredNotes, action.payload];
    case ActionNoteTypes.DELETE_NOTE:
      return notes.filter((note)=> action.payload._id !== note._id)
    default:
      return notes;
  }
};
