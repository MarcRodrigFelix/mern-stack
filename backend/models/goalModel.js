const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// CREATE SCHEMA
const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text value']
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('Goal', goalSchema) //EXPORT SCHEMA AS MODEL