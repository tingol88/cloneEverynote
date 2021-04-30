/* eslint-disable import/extensions */
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import logger from 'morgan';
// import path from "path";
import session from 'express-session';
import FileStoreSession from 'session-file-store';

import notesRouter from './routers/notesRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();
const app = express();
const FileStore = FileStoreSession(session);

/* Подключаем middleware morgan с режимом логирования "dev",
чтобы для каждого HTTP-запроса на сервер в консоль выводилась инфа */
app.use(logger('dev'));

// подключаем пакет cors и настраиваем что бы получать cookie c фронта
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  }),
);
/* Подключаем middleware, которое позволяет читать переменные JavaScript,
сохранённые в формате JSON в body HTTP-запроса. */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// подключаем запись сессии только для залогиненых пользователей
app.use(
  session({
    store: new FileStore(),
    key: 'sid',
    secret: 'terwert',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  }),
);

// пример роутинга
app.use('/notes', notesRouter);
app.use('/user', userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log('server is up on port', PORT);
  await mongoose.connect(process.env.DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log('db online');
});
