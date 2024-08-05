require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const customer = require('../model/customer');
const vehicles = require('../model/vehicles');
const technician = require('../model/technician');
const services = require('../model/services');
const invoice = require('../model/invoice');
const appointment = require('../model/appointment');


"use strict";
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "shubhampipaliya25@gmail.com",
    pass: "qbjbucdpnablpvmi",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(mail) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "karma furniture", // sender address
    to: mail, // list of receivers
    subject: "my money", // Subject line
    
    text: "sdjkldsljkf", // plain text body
    html: "hello shubham ", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}



exports.user_create = async function(req, res, next) {
    try {
      if(!req.body.name  || !req.body.email || !req.body.password){
        throw new Error("please the fill data")
      }
      req.body.password = await bcrypt.hash(req.body.password , 10)
      const user_create = await customer.create(req.body)
      let user_token = jwt.sign({ id: user_create._id},process.env.SECRET_USER)
      main(req.body.email)
      res.status(201).json({
        status:"success",
        message:"user created",
        data: user_create,
        user_token
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }


exports.station_create =  async function(req, res, next) {
    try {
      if (!req.body.make || !req.body.model  || !req.body.year || !req.body.lpn) {
        throw new Error("please fill the data")
      }
      const station_create = await vehicles.create(req.body)
      const station_token = jwt.sign({ id: station_create._id },process.env.SECRET_STATION)
      res.status(201).json({
        status:"success",
        message:"user created",
        data : station_create,
        station_token
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }


  exports.services_create =  async function(req, res, next) {
    if (!req.body.servicename  || !req.body.discription || !req.body.cost) {
      throw new Error("please fill the data")
    }
    try {
      const services_data =  await services.create(req.body)
      let services_token = jwt.sign({id:services_data._id},process.env.SECRET_SERVICES)
      res.status(201).json({
          status: "success",
          message:"services form create",
          data:services_data,
          services_token
      })
    } catch (error) {
      res.status(404).json({
          status:"faild",
          message:error.message
      })
    }
  }


  exports.technician_create =  async function(req, res, next) {
    if (!req.body.fname  || !req.body.lname || !req.body.number || !req.body.email) {
      throw new Error("please fill the data")
    }
    try {
      const technician_data =  await technician.create(req.body)
      let technician_token = jwt.sign({id:technician_data._id},process.env.SECRET_TECHNICIAN)
      res.status(201).json({
          status: "success",
          message:"services form create",
          data:technician_data,
          technician_token
      })
    } catch (error) {
      res.status(404).json({
          status:"faild",
          message:error.message
      })
    }
  }


  exports.appointment_create =  async function(req, res, next) {
    if (!req.body.fname  || !req.body.lname || !req.body.number || !req.body.email) {
      throw new Error("please fill the data")
    }
    try {
      const appointment_data =  await appointment.create(req.body)
      let appointment_token = jwt.sign({id:appointment_data._id},process.env.SECRET_APPOINTMENT)
      res.status(201).json({
          status: "success",
          message:"services form create",
          data:appointment_data,
          appointment_token
      })
    } catch (error) {
      res.status(404).json({
          status:"faild",
          message:error.message
      })
    }
  }


  exports.invoice_create =  async function(req, res, next) {  
    if (!req.body.fname  || !req.body.lname || !req.body.number || !req.body.email) {
      throw new Error("please fill the data")
    }
    try {
      const invoice_data =  await invoice.create(req.body)
      let invoice_token = jwt.sign({id:invoice_data._id},process.env.SECRET_INVOICE)
      res.status(201).json({
          status: "success",
          message:"services form create",
          data:invoice_data,
          invoice_token
      })
    } catch (error) {
      res.status(404).json({
          status:"faild",
          message:error.message
      })
    }
  }