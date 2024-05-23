var mongoose = require('mongoose');
const WorkPermit = mongoose.model('workpermit');

mongoose.connect("mongodb+srv://Nishantgpt619:NishantWorkPermit@workpermit.oqqm4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

var conn = mongoose.connection;

conn.on('connected', function () {
    console.log('database is connected successfully')
});
conn.on('disconnected', function () {
    console.log('database is disconnected, Kindly connect to internet');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;
