const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let prodect = new Schema({
    Modalname: {
        type: String
    },
    color: {
        type: String
    },
}, {
        collection: 'prodect'
    });

module.exports = mongoose.model('prodect', prodect);