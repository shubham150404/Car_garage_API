const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const technicianSchema = new Schema({
  fname: String,
  lname: String,
  number: String,
  email:String
});


const technician = mongoose.model('technician',technicianSchema)

module.exports = technician;