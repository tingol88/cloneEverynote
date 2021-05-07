import mongoose from 'mongoose';

const { model, Schema, pluralize } = mongoose;
pluralize(null);
const AuthorSchema = Schema({
  name: String,
  surname: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now() },
  workStartDate: Date,
  workEndDate: Date,
});
const Author = model('authors', AuthorSchema);
export default Author;
