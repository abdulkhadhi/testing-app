const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Register = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: Number
  },
}, {
    collection: 'Register'
  });

module.exports = mongoose.model('Register', Register);