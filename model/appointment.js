const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  customerDetails : {type: mongoose.Schema.ObjectId, ref: 'customer'},
  vehicleDetails : {type: mongoose.Schema.ObjectId, ref: 'vehicle'},
  technicianDetails: {type: mongoose.Schema.ObjectId, ref: 'technician'},
  appointmentdate:String,
  notes:String
});


const appointment = mongoose.model('appointment',appointmentSchema)

module.exports = appointment;