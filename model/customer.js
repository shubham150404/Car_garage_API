const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerschema = new Schema({
  fname: String,
  lname: String,
  number: String,
  email: String,
  password:String,
  address:String
});

const customer = mongoose.model('customer',customerschema)

module.exports = customer;