const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subscriptions: [{
    type: Schema.Types.ObjectId,
    ref: 'Subscription'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User
