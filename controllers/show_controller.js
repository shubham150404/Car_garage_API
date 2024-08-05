const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const customer = require('../model/customer');
const vehicles = require('../model/vehicles');
const technician = require('../model/technician');
const services = require('../model/services');
const invoice = require('../model/invoice');
const appointment = require('../model/appointment');


exports.user_data_show =  async function(req, res, next) {
    try {
      const user_data = await customer.find()
      res.status(201).json({
        status:"success",
        message:"user data show",
        data: user_data
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }


exports.station_data_show = async function(req, res, next) {
    try {
      const station_data_show = await vehicles.find().populate('customerid')
      res.status(201).json({
        status:"success",
        message:"station data show",
        data : station_data_show
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
}


exports.services_data_show = async function(req, res, next) {
    try {
      const services_data_show = await services.find()
      res.status(201).json({
        status:"success",
        message:"services data show",
        data : services_data_show
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
}


exports.technician_data_show = async function(req, res, next) {
    try {
      const technician_data_show = await technician.find()
      res.status(201).json({
        status:"success",
        message:"services data show",
        data : technician_data_show
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
} 

exports.appointment_data_show = async function(req, res, next) {
    try {
      const appointment_data_show = await appointment.find().populate('customerDetails').populate('vehicleDetails').populate('technicianDetails')
      res.status(201).json({
        status:"success",
        message:"appointment data show",
        data : appointment_data_show
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
} 

exports.invoice_data_show = async function(req, res, next) {
    try {
      const invoice_data_show = await invoice.find().populate('appointment')
      res.status(201).json({
        status:"success",
        message:"invoice data show",
        data : invoice_data_show
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
} 

