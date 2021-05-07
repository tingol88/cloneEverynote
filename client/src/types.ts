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
  id: string;
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
  notes: Array<NoteType["id"]>;
};
export type UserType = {
  createdAt: Date;
  email: string;
  id: string;
  isConfirmed: boolean;
  name: string;
  surname: string;
};

export type initialStateType = {
  user: UserType | {};
  notes: Array<NoteType> | [];
};
