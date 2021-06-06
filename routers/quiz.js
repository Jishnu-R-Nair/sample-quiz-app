const express = require('express');
const Quiz = require('../models/Quiz');

const router = express.Router();

// create quiz
router.post('/quizzes', async (req, res) => {
  try {
    const { questions } = req.body;
    if (!questions || (questions && questions.length === 0)) {
      return res.status(400).send();
    }

    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).send(quiz);
  } catch (e) {
    console.log('Error while creating quiz', e);
    res.status(400).send();
  }
});

// get paginated quizzes
router.get('/quizzes', async (req, res) => {
  try {
    let { page } = req.query;
    page = Number(page);

    if (page <= 1) {
      page = 1;
    }

    const quizzes = await Quiz.find({}, '', { limit: 5, skip: (page - 1) * 5 });
    res.send(quizzes);
  } catch (e) {
    console.log('Error while getting quizzes');
  }
});

module.exports = router;
