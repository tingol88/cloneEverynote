import mongoose from 'mongoose';

const { Schema, model, pluralize } = mongoose;
pluralize(null);

const userSchema = Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now() },
  confirmEmailHash: String,
  isConfirmed: { type: Boolean, default: false },
});

const User = model('users', userSchema);
export default User;
