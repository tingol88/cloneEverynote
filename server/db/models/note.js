import mongoose from 'mongoose';

const { Schema, model, pluralize } = mongoose;

pluralize(null);

const noteSchema = {
  id: String,
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now() },
  category: { type: String, default: 'None category' },
  notebook: { type: Schema.ObjectId, ref: 'Notebook' },
};

const Note = model('notes', noteSchema);
export default Note;
