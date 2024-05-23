const mongoose = require('mongoose');


const employee = new mongoose.Schema({
    employeeName: String,
    tokenNumber: String,
    password: String,
    department: String,
    designation: String
})

mongoose.model('employee', employee);

