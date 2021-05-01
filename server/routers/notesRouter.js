/* eslint-disable import/extensions */
import express from 'express';
import Note from '../db/models/note.js';

const dbPosts = [{
  id: '111',
  title: 'title posts',
  autor: 'Pushkin',
  createdAt: Date.now(),
  content: 'alakjsdflkasjdf;lkjasd;lfkjasl;kdfjslkdjf',
  category: 'travel',
}, {
  id: '123',
  title: 'title posts 2',
  autor: 'Pushkin',
  createdAt: Date.now(),
  content: 'alakjsdflkasjdf;lkjasd;lfkj',
  category: 'footbol',
}];
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    return res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post('/', async (req, res) => {
  const {
    title, autor, content, category,
  } = req.body;
  if (title && autor && content) {
    const note = await Note.create({
      title, autor, content, category,
    });
    return res.status(200).json(note);
  }
  return res.status(403).json({ message: 'uncorrect data type' });
});
export default router;
