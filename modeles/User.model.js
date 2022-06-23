const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: String,
  isBlocked: {
    type: Boolean,
    default: false
  },
  hasBook: [{
    ref: 'Book',
    type: mongoose.Schema.Types.ObjectId
  }]

});

const User = mongoose.model('User', usersSchema);
module.exports = User;