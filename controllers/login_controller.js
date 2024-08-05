require('dotenv').config();
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const customer = require('../model/customer');
const vehicles = require('../model/vehicles');
const technician = require('../model/technician');
const services = require('../model/services');
const invoice = require('../model/invoice');
const appointment = require('../model/appointment');

exports.user_sequre = async function(req, res, next) {
  try {
    let jwt_token = req.headers.authorization
    if (!jwt_token) {
      throw new Error("token not found")
    }
    let data = jwt.verify(jwt_token,process.env.SECRET_USER)
    next()
  } catch (error) {
    res.status(404).json({
      status:"faild",
      message:error.message
    })
  }
}


exports.user_login = async function(req, res, next) {
    try {
      if(!req.body.email || !req.body.password){
        throw new Error("please the fill data")
      }
      let checkemail = await customer.findOne({ email: req.body.email })
      if (!checkemail) {
        throw new Error("please enter the valid email")
      } 
      let checkpassword = await bcrypt.compare(req.body.password , checkemail.password)
      if (!checkpassword){
        throw new Error("wrong password")
      } 
      let user_token = jwt.sign({ id: checkemail._id},process.env.SECRET_USER)
      res.status(201).json({
        status:"success",
        message:"login",
        data: checkemail,
        user_token
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }

  exports.station_sequre = async function(req, res, next) {
    try {
      let jwt_station_token = req.headers.authorization
      if (!jwt_station_token) {
        throw new Error("token is not valid")
      }
      let station_data_token = jwt.verify(jwt_station_token,process.env.SECRET_STATION)
      next()
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }


exports.station_login = async function(req, res, next) {
  try {
    if (!req.body.email  || !req.body.password) {
      throw new Error("please fill the data")
    }
    const checkemail = await vehicles.findOne({email : req.body.email})
    if(!checkemail){
      throw new Error("wrong email")
    }
    const checkpass = await bcrypt.compare(req.body.password , checkemail.password)
    if(!checkpass){
      throw new Error("wrong password")
    }
    const station_token = jwt.sign({id : checkemail._id },process.env.SECRET_STATION)
    res.status(201).json({
      status:"success",
      message:"login",
      data : checkemail,
      station_token
    })
  } catch (error) {
    res.status(404).json({
      status:"faild",
      message:error.message
    })
  }
}

exports.technician_sequre = async function(req, res, next) {
  try {
    let jwt_technician_token = req.headers.authorization
    if (!jwt_technician_token) {
      throw new Error("token is not valid")
    }
    let technician_data_token = jwt.verify(jwt_technician_token ,process.env.SECRET_TECHNICIAN)
    next()
  } catch (error) {
    res.status(404).json({
      status:"faild",
      message:error.message
    })
  }
}

exports.services_sequre = async function(req, res, next) {
  try {
    let jwt_services_token = req.headers.authorization
    if (!jwt_services_token) {
      throw new Error("token is not valid")
    }
    let services_data_token = jwt.verify(jwt_services_token ,process.env.SECRET_SERVICES)
    next()
  } catch (error) {
    res.status(404).json({
      status:"faild",
      message:error.message
    })
  }
}


exports.appointment_sequre = async function(req, res, next) {
  try {
    let jwt_appointment_token = req.headers.authorization
    if (!jwt_appointment_token) {
      throw new Error("token is not valid")
    }
    let appointment_data_token = jwt.verify(jwt_appointment_token ,process.env.SECRET_APPOINTMENT)
    next()
  } catch (error) {
    res.status(404).json({
      status:"faild",
      message:error.message
    })
  }
}


exports.invoice_sequre = async function(req, res, next) {
  try {
    let jwt_invoice_token = req.headers.authorization
    if (!jwt_invoice_token) {
      throw new Error("token is not valid")
    }
    let invoice_data_token = jwt.verify(jwt_invoice_token,process.env.SECRET_INVOICE)
    next()
  } catch (error) {
    res.status(404).json({
      status:"faild",
      message:error.message
    })
  }
}