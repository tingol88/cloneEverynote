// import { NoteType, NotebookType } from './../../types';
// import { createSlice, PayloadAction, combineReducers, createStore} from '@reduxjs/toolkit'



// interface NotesState {
//   notes: { [id: string]: NoteType }, 
//   notebooks: { [id: string]: NotebookType }
// }


// const initialState = {
//   notes: {
//     '123': {
//       id: '123',
//       title: "заголовок первой статьи",
//       content: "контент второй статьи",
//       createdAt: new Date(Date.now()),
//       notebook: {
//         id: '1',
//         title: 'название блокнота',
//         createdAt: new Date(Date.now()),
//         notes: ['123'],
//       }
//     }
//   },
//   notebooks: {
//     '1': {
//       id: '1',
//       title: 'название блокнота',
//       createdAt: new Date(Date.now()),
//       notes: ['123'],
//     }
//   }
// } as unknown as NotesState //adding by eslint

// const notesSlice = createSlice({
//   name: 'notes',
//   initialState,
//   reducers: {
//     addNote(state, note) {
//       console.log(note);
//       state.notes = {...state.notes, [Object.keys(note)[0]]: Object.values(note)[0]}
//     },
//     // decrement(state) {
//     //   state.value--
//     // },
//     // incrementByAmount(state, action: PayloadAction<number>) {
//     //   state.value += action.payload
//     // },
//   },
// })
// const reducer = combineReducers({
//   notes: notesSlice.reducer,
// })

// const store = createStore(reducer)

// // store.dispatch(notesSlice.actions.addNote({  /* тут твой объект типа NoteType */ }))
// store.dispatch(notesSlice.actions.addNote({'123': { 
//   id: '123',
//   title: "заголовок первой статьи",
//   content: "контент второй статьи",
//   createdAt: new Date(Date.now()),
//   notebook: {
//     id: '1',
//     title: 'название блокнота',
//     createdAt: new Date(Date.now()),
//     notes: ['123'],
//   }
// }}))

// console.log(store.getState())

// export const { addNote } = notesSlice.actions
// export default notesSlice.reducer
export {}
