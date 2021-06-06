const express = require('express');

require('./db/mongoose');
const logger = require('./middleware/logger');
const optionRouter = require('./routers/option');
const questionRouter = require('./routers/question');
const quizRouter = require('./routers/quiz');
const quizAttemptRouter = require('./routers/quizAttempt');

const app = express();

app.use(express.json());
app.use(logger);
app.use(optionRouter);
app.use(questionRouter);
app.use(quizRouter);
app.use(quizAttemptRouter);

app.get('/', (_req, res) => {
  res.send('Hello world!');
});

app.listen('3000', () => {
  console.log('App is up and running on port 3000');
});
