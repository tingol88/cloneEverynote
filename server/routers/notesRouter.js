/* eslint-disable import/extensions */
import express from 'express';
import Note from '../db/models/note.js';

// const dbPosts = [{
//   id: '111',
//   title: 'title posts',
//   autor: 'Pushkin',
//   createdAt: Date.now(),
//   content: 'alakjsdflkasjdf;lkjasd;lfkjasl;kdfjslkdjf',
//   category: 'travel',
// }, {
//   id: '123',
//   title: 'title posts 2',
//   autor: 'Pushkin',
//   createdAt: Date.now(),
//   content: 'alakjsdflkasjdf;lkjasd;lfkj',
//   category: 'footbol',
// }];
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    return res.status(200).json(notes);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

router.post('/', async (req, res) => {
  console.log('hi from router addnote', req.body);
  const {
    title, author, content, category,
  } = req.body;
  if (title && author && content) {
    const note = await Note.create({
      title, author, content, category,
    });
    return res.status(200).json(note);
  }
  return res.status(403).json({ message: 'uncorrect data type' });
});

router.delete('/', async (req, res) => {
  const {
    id,
  } = req.body;
  if (id) {
    try {
      const note = await Note.findByIdAndDelete(id);
      if (note.title) return res.status(200).json({ note });
      return res.status(403).json({ message: 'this id does not exist' });
    } catch (error) {
      return res.status(500);
    }
  }
  return res.status(403).json({ message: 'введите корректные данные' });
});
// нужно написать
router.patch('/', async (req, res) => {
  const {
    id, title, content, category,
  } = req.body;
  if (id && title && content && category) {
    try {
      const updatedPost = await Note.findByIdAndUpdate(id, { title, content, category });
      return res.status(200).json(updatedPost);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  } else return res.status(403).json({ message: 'uncorrected input data' });
});
export default router;
