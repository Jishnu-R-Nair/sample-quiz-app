const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    durationInMinutes: {
      type: Number,
      required: true,
      validate(value) {
        if (value <= 0) {
          throw new Error('Quiz duration must me greater than 0 minutes');
        }
      },
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
      },
    ],
  },
  { timestamps: true }
);

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
