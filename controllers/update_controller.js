const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const customer = require('../model/customer');
const vehicles = require('../model/vehicles');
const technician = require('../model/technician');
const services = require('../model/services');
const invoice = require('../model/invoice');
const appointment = require('../model/appointment');


exports.customer_update = async function(req, res, next) {
    try {
      // const customer_update = await customer.findByIdAndUpdate(req.query.id,req.body,{new : true})
      const customer_update = await customer.findByIdAndUpdate(req.query.id,req.body)
      res.status(201).json({
        status:"success",
        message:"data updated",
        data : customer_update
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }

exports.vehicle_update = async function(req, res, next) {
    try {
      const vehicle_update = await vehicles.findByIdAndUpdate(req.query.id,req.body)
      res.status(201).json({
        status:"success",
        message:"data updated",
        data : vehicle_update
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }

exports.services_update = async function(req, res, next) {
    try {
      const services_update = await services.findByIdAndUpdate(req.query.id,req.body)
      res.status(201).json({
        status:"success",
        message:"data updated",
        data : services_update
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }


exports.technician_update = async function(req, res, next) {
    try {
      const technician_update = await technician.findByIdAndUpdate(req.query.id,req.body)
      res.status(201).json({
        status:"success",
        message:"data updated",
        data : technician_update
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }  


exports.appointment_update = async function(req, res, next) {
    try {
      const appointment_update = await appointment.findByIdAndUpdate(req.query.id,req.body)
      res.status(201).json({
        status:"success",
        message:"data updated",
        data : appointment_update
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  } 


exports.invoice_update = async function(req, res, next) {
    try {
      const invoice_update = await invoice.findByIdAndUpdate(req.query.id,req.body)
      res.status(201).json({
        status:"success",
        message:"data updated",
        data : invoice_update
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  } 