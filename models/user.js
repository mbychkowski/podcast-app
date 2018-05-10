const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
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
},
{ toJSON: { virtuals: true } })

userSchema.virtual('subscribed', {
  ref: 'Subscription', // The model to use
  localField: 'email', // Find people where `localField`
  foreignField: 'userEmail', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false
});


const User = mongoose.model('User', userSchema);

module.exports = User
