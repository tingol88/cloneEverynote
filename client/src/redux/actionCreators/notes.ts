// const filterByTemp = (paramMinTemp, paramMaxTemp) => async (dispatch) => {
//     console.log(paramMinTemp, paramMaxTemp)
//     const response = await fetch('/tours', {
//       // const response = await fetch('http://localhost:3001/tours', {
  
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({minTemp: paramMinTemp, maxTemp: paramMaxTemp })
//     }, { credentials: 'include' });
//     console.log('response', response)
//     const result = await response.json();
//     dispatch({
//       type: TYPES.SET_TOURS,
//       data: result,
//     })
//     }
// для примера
import { Notes } from "@material-ui/icons";
import axios from "axios";
import { actionCreateNoteType, actionUpdateNameType, actionUpdateSurnameType, NoteType } from "../../types";
import {ActionNoteTypes} from "../actionTypes";
// rembember that action mast return obj Action with property type 

export const actionCreateNote = (title:string, author: string, content: string, category: string):Function => {
  
  return async (dispatch:any) => {
   const response = await fetch(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          author,
          content,
          category,
        }),
        credentials: 'include',
      }
    )
      const note:NoteType = await response.json();
    if (note._id) {
      dispatch({type: ActionNoteTypes.CREATE_NOTE,
        payload: note,})
    }
  }
}
export const actionSetNotes = ():Function => {
  return async(dispatch:any) => {
    const notes = await axios.get(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/notes`)
    dispatch({type: ActionNoteTypes.SET_NOTES,
    payload: notes.data,
    })
  }
}
export const actionDeleteNote = (id:string):Function => {
   return async (dispatch:any) =>{
     const url = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/notes/`
     const response = await fetch(url, {
       method: 'DELETE',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         id,
       }),
       credentials: "include",
     })
     console.log('from actionDeleteNote--->', response);
     const note = await response.json()
     
     dispatch({
       type: ActionNoteTypes.DELETE_NOTE,
       payload: note,
     })

   }
}