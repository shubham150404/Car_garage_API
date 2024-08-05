const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  servicename: String,
  discription: String,
  cost: String
});


const service = mongoose.model('service',serviceSchema)

module.exports = service;