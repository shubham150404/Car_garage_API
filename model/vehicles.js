const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleschema = new Schema({
  customerid: {type: mongoose.Schema.ObjectId, ref: 'customer'},
  make : String,
  model: String,
  year: String,
  lpn: String
  
});

const vehicle = mongoose.model('vehicle',vehicleschema)
 
module.exports = vehicle; 