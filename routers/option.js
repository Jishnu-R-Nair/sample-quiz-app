const express = require('express');
const Option = require('../models/Option');

const router = express.Router();

// create option
router.post('/options', async (req, res) => {
  try {
    const option = new Option(req.body);
    await option.save();
    res.status(201).send(option);
  } catch (e) {
    console.log('Error while creating option', e);
    res.status(400).send();
  }
});

module.exports = router;
