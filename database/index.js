var mongoose = require('mongoose');
const WorkPermit = mongoose.model('workpermit');
const keys = require("../keys");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

var conn = mongoose.connection;

conn.on('connected', function () {
    console.log('database is connected successfully')
});
conn.on('disconnected', function () {
    console.log('database is disconnected, Kindly connect to internet');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;
