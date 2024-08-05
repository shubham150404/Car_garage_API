const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const customer = require('../model/customer');
const vehicles = require('../model/vehicles');
const technician = require('../model/technician');
const services = require('../model/services');
const invoice = require('../model/invoice');
const appointment = require('../model/appointment');


exports.customer_data_del = async function(req, res, next) {
    try {
       await customer.findByIdAndDelete(req.query.id)
      res.status(201).json({
          status: "success",
          message:"your data are deleted",
          
      })
    } catch (error) {
      res.status(404).json({
          status:"faild",
          message:error.message
      })
    }
  }

  exports.vehicles_data_del = async function(req, res, next) {
    try {
       await vehicles.findByIdAndDelete(req.query.id)
      res.status(201).json({
          status: "success",
          message:"your data are deleted",
          
      })
    } catch (error) {
      res.status(404).json({
          status:"faild",
          message:error.message
      })
    }
  }  

  exports.services_data_del = async function(req, res, next) {
    try {
       await services.findByIdAndDelete(req.query.id)
      res.status(201).json({
          status: "success",
          message:"your data are deleted",
          
      })
    } catch (error) {
      res.status(404).json({
          status:"faild",
          message:error.message
      })
    }
  }


  exports.technician_data_del = async function(req, res, next) {
    try {
       await technician.findByIdAndDelete(req.query.id)
      res.status(201).json({
          status: "success",
          message:"your data are deleted",
          
      })
    } catch (error) {
      res.status(404).json({
          status:"faild",
          message:error.message
      })
    }
  }


  exports.appointment_data_del = async function(req, res, next) {
    try {
       await appointment.findByIdAndDelete(req.query.id)
      res.status(201).json({
          status: "success",
          message:"your data are deleted",
          
      })
    } catch (error) {
      res.status(404).json({
          status:"faild",
          message:error.message
      })
    }
  }


  exports.invoice_data_del = async function(req, res, next) {
    try {
       await invoice.findByIdAndDelete(req.query.id)
      res.status(201).json({
          status: "success",
          message:"your data are deleted",
          
      })
    } catch (error) {
      res.status(404).json({
          status:"faild",
          message:error.message
      })
    }
  }