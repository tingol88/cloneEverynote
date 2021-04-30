/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import { Router } from 'express';
import bcrypt from 'bcrypt';
// специальная программа для отправки писем через яндекс (нужные еще настройки почтовых
// программ в яндексе)
import mailer from '../services/mailer.js';

import User from '../db/models/user.js';
// import authenticated from './middleware.js';

const router = Router();

class UserForClient {
  constructor(id, name, surname, email, isConfirmed, createdAt) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.isConfirmed = isConfirmed;
    this.createdAt = createdAt;
  }
}
//= ====== check session=======
router.get('/login', async (req, res) => {
  let user;
  try {
    user = await User.findById(req.session.user.id);
    if (!user) return res.sendStatus(204);
  } catch (error) {
    return res.status(501);
  }
  // create new object User special for client
  const {
    _id, name, surname, email, isConfirmed, createdAt,
  } = user;
  const userForClient = new UserForClient(_id, name, surname, email, isConfirmed, createdAt);
  res.status(200).json(userForClient);
});

//= ========login============
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  let user;
  try {
    user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(403).json({ message: 'login or password uncorrect' });
    }
  } catch (error) {
    return res.sendStatus(501);
  }
  // if user yet unconfirmd email we are cancel login
  if (!user.isConfirmed) return res.status(403).json({ message: 'unconfirmed email' });
  req.session.user = { id: user._id };
  const {
    _id, name, surname, isConfirmed, createdAt,
  } = user;
  const userForClient = new UserForClient(_id, name, surname, email, isConfirmed, createdAt);
  return res.status(200).json(userForClient);
});

//= ================register===========
router.post('/register', async (req, res) => {
  const {
    name, surname, password, email,
  } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  let user;
  try {
    user = await User.findOne({ email });
    if (user) {
      return res.status(403).json({ message: 'email already exist' });
    }
    const confirmEmailHash = await bcrypt.hash(email, saltRounds);

    user = await User.create({
      name, surname, password: hashedPassword, email, confirmEmailHash,
    });

    const confirmEmail = `${process.env.HOST}:${process.env.PORT}/user/confirm-email?h=${confirmEmailHash}`;
    // first param theme of mail, second text of mail
    await mailer('Регистрация', `<html><body>Привет!${name} ${surname} мы благодарны вам за регистрацию в нашем сервисе и ждем вашу обратную связь Почему он используется?
    Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты). <a href=${confirmEmail}>Подтвердите email</a> </body></html>`, null, email);
  } catch (error) {
    return res.status(501).json({ message: error });
  }
  const {
    _id, isConfirmed, createdAt,
  } = user;
  const userForClient = new UserForClient(_id, name, surname, email, isConfirmed, createdAt);
  return res.status(200).json(userForClient);
});
//= =========confirmEmail========
router.get('/confirm-email', async (req, res) => {
  const hash = req.query.h;
  const user = await User.findOne({ confirmEmailHash: hash });
  if (!user) return res.status(404).json({ message: 'Error find user' });
  await user.updateOne({ isConfirmed: true });
  req.session.user = { id: user._id };
  res.redirect(`${process.env.HOST}:${process.env.CLIENT_PORT}`);
});

// =================logout===================
router.get('/logout', (req, res) => {
  // Удаляем сессию с сервера (или базы данных, если сессия хранится там).
  req.session.destroy();
  // Говорим клиенту, чтобы он удалил куку.
  res.clearCookie('sid');
  res.sendStatus(200);
});

export default router;
