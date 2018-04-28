const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const podcastSchema = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", podcastSchema);

module.exports = Book;
