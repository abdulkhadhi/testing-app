const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./api/config.js');
const Reg = require('./api/crud');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/Reg', Reg);

app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
  });