import mongoose from 'mongoose';

const { Schema, model, pluralize } = mongoose;
pluralize(null);

const notebookSchema = Schema({
  id: String,
  title: String,
  createdAt: { type: Date, default: Date.now() },
  notes: ['123'],
});

const Notebook = model('notebook', notebookSchema);
export default Notebook;
