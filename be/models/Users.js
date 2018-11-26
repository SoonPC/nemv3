const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, default: ''},
  age: { type: Number, default: 1}
})

const User = mongoose.model('User', userSchema)

module.exports = User
