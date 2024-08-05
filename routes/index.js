require('dotenv').config();
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const customer = require('../model/customer');
const vehicles = require('../model/vehicles');
const technician = require('../model/technician');
const services = require('../model/services');
const invoice = require('../model/invoice');
const appointment = require('../model/appointment');
const bcrypt = require('bcrypt');
const create_controller = require('../controllers/create_controller')
const login_controller = require('../controllers/login_controller')
const data_show_controller = require('../controllers/show_controller')
const data_delete_controller = require('../controllers/delete_controller')
const data_update_controller = require('../controllers/update_controller')
var jwt = require('jsonwebtoken');

/* GET home page. */



// customer
router.post('/customer_signup',create_controller.user_create);

router.post('/customer_login',login_controller.user_login);

router.get('/customer_data',login_controller.user_sequre,data_show_controller.user_data_show);

router.delete('/customer_delete',data_delete_controller.customer_data_del);

router.put('/customer_update',data_update_controller.customer_update);

// vehicle
router.post('/vehicles_signup',create_controller.station_create);

router.post('/vehicles_login',login_controller.station_login);

router.get('/vehicles_data',login_controller.station_sequre,data_show_controller.station_data_show);

router.delete('/vehicles_delete',data_delete_controller.vehicles_data_del);

router.put('/vehicles_update',data_update_controller.vehicle_update);

// services

router.post('/services_create',create_controller.services_create);

router.get('/services_data',login_controller.services_sequre,data_show_controller.services_data_show);

router.delete('/services_delete',data_delete_controller.services_data_del);

router.put('/services_update',data_update_controller.services_update);


//technician

router.post('/technician_create',create_controller.technician_create);

router.get('/technician_data',login_controller.technician_sequre,data_show_controller.technician_data_show);

router.delete('/technician_delete',data_delete_controller.technician_data_del);

router.put('/technician_update',data_update_controller.technician_update);


//appointment

router.post('/appointment_create',create_controller.appointment_create);

router.get('/appointment_data',login_controller.appointment_sequre,data_show_controller.appointment_data_show);

router.delete('/appointment_delete',data_delete_controller.appointment_data_del);

router.put('/appointment_update',data_update_controller.appointment_update);


//invoice

router.post('/invoice_create',create_controller.invoice_create);

router.get('/invoice_data',login_controller.invoice_sequre,data_show_controller.invoice_data_show);

router.delete('/invoice_delete',data_delete_controller.invoice_data_del);

router.put('/invoice_update',data_update_controller.invoice_update);


// product: {type: mongoose.Schema.ObjectId, ref: 'watch'}

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
module.exports = router;
