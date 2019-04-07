const express = require('express');
const appRoute = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const config = require('./config');
const RegisterSchma = require('./schema.js')

// Defined store route
appRoute.route('/add').post(function (req, res) {
  // console.log(req.body);
  const email = req.body.email;
  // console.log(email);
  RegisterSchma.findOne({ email }).then(user => {
    // console.log(user);
    if (user) {
      return res.status(404).json({ email: "Email already exists" })
    }
    else {
      let Reg = new RegisterSchma(req.body);
      Reg.save()
        .then(Reg => {
          return res.status(200).json({ 'Reg': 'Reg in added successfully' });
        })
        .catch(err => {
          return res.status(400).send("unable to save to database");
        });
    }
  })
})

appRoute.route('/').get(function (req, res) {
  // eslint-disable-next-line array-callback-return
  RegisterSchma.find(function (err, Reg) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(Reg);
    }
  });
});
appRoute.route('/login').post(function (req, res) {
  // console.log(req.body);
  const email = req.body.email;
  // console.log(email);
  const password = req.body.password;
  RegisterSchma.findOne({ email }).then(user => {
    console.log(user);
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" })
    }
    else {
      return res.status(200).json({ login: "Login successfully" });
    }
  })
})
module.exports = appRoute;