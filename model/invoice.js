const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    appointment: {type: mongoose.Schema.ObjectId, ref: 'appointment'},
    totalcost: String,
    paymentstatus: String,
    paymentdate: String
});


const invoice = mongoose.model('invoice',invoiceSchema)

module.exports = invoice;