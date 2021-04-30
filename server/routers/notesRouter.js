import express from 'express'
const dbPosts = [{
  id: '111',
  title: 'title posts',
  autor: 'Pushkin',
  createdAt: Date.now(),
  content: "alakjsdflkasjdf;lkjasd;lfkjasl;kdfjslkdjf",
  category: 'travel'
},{
  id: '123',
  title: 'title posts 2',
  autor: 'Pushkin',
  createdAt: Date.now(),
  content: "alakjsdflkasjdf;lkjasd;lfkj",
  category: 'footbol'
}]
const router = express.Router()

router.get('/', (req, res)=> {
  res.json(dbPosts)
})

export default router
