const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
  name: String,
  genre: String,
  review: [{
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId
  }],
  loan: [{
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
    default: null
  }]
});

const Book = mongoose.model('Book', booksSchema);
module.exports = Book;