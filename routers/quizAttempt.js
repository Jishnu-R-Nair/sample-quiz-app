const express = require('express');
const QuizAttempt = require('../models/QuizAttempt');
const Quiz = require('../models/Quiz');

const router = express.Router();

// create quiz attempt
router.post('/quiz-attempts', async (req, res) => {
  try {
    const { quiz } = req.body;

    const quizExists = await Quiz.exists({ _id: quiz });
    if (!quizExists) return res.status(400).send();

    const quizAttempt = new QuizAttempt(req.body);
    await quizAttempt.save();
    res.status(201).send(quizAttempt);
  } catch (e) {
    console.log('Error while creating quiz attempt', e);
    res.status(400).send();
  }
});

module.exports = router;
