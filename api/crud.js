const express = require('express');
const appRoute = express.Router();
const RegisterSchma = require('./schema.js')    

// Defined store route
appRoute.route('/add').post(function (req, res) {
  let Reg = new RegisterSchma(req.body);
  Reg.save()
    .then(Reg => {
      res.status(200).json({'Reg': 'Reg in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

appRoute.route('/').get(function (req, res) {
    // eslint-disable-next-line array-callback-return
    RegisterSchma.find(function(err, Reg){
    if(err){
      console.log(err);
    }
    else {
      res.json(Reg);
    }
  });
});
module.exports = appRoute;