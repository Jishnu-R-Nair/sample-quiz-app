const express = require('express');
const Question = require('../models/Question');

const router = express.Router();

// create question
router.post('/questions', async (req, res) => {
  try {
    const { options, correctOptions } = req.body;

    if (
      !options ||
      !correctOptions ||
      (options && options.length === 0) ||
      (correctOptions && correctOptions.length === 0) ||
      options.length <= correctOptions.length
    ) {
      return res.status(400).send();
    }

    const question = new Question(req.body);
    await question.save();
    res.status(201).send(question);
  } catch (e) {
    console.log('Error while creating question', e);
    res.status(400).send();
  }
});

module.exports = router;
