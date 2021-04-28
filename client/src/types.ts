export type NoteType = {
  id: string
  title: string
  content: string
  createdAt: Date
  updatedAt?: Date
  notebook: NotebookType
}
export type NotebookType = {
  id: string
  title: string
  createdAt: Date
  notes: Array<NoteType['id']>
}
