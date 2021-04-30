import { Router } from "express";
import bcrypt from "bcrypt";

import User from "../db/models/user.js";
import authenticated from "./middleware.js";

const router = Router();
//======= check session=======
router.post("/login", async (req, res) => {
  let user;
  try {
    user = await User.findById(req.session.user.id);
    if (!user) return res.sendStatus(204);
  } catch (error) {
    return res.status(501);
  }
  res.status(200).json(user);
});

//=========login============
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user;
  try {
    user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(501);
    }
  } catch (error) {
    return res.sendStatus(501);
  }
  req.session.user = { id: user._id };
  return res.status(200).json(user);
});

//=================register===========
router.post("/register", async (req, res) => {
  const { name, surname, password, email } = req.body;
  const saltRound = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  let user;
  try {
    user = User.findOne({ email: email });
    if (user) {
      return res.status(403).json({ message: "email already exist" });
    } else {
      user = User.create({ name, surname, password: hashedPassword, email });
    }
  } catch (error) {
    return res.sendStatus(501);
  }
  req.session.user = { id: user_id };
  return res.status(200).json(user);
});


// =================logout===================
router.get('/logout', (req, res)=> {
      // Удаляем сессию с сервера (или базы данных, если сессия хранится там).
    req.session.destroy()
    // Говорим клиенту, чтобы он удалил куку.
    res.clearCookie('sid');
    res.sendStatus(200);
})


export default router;
