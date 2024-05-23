const mongoose = require('mongoose');
const Employee = mongoose.model('employee')

var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const { employeeName, tokenNumber, designation, department } = req.body;

  const employee = new Employee({
    employeeName,
    tokenNumber,
    password: bcrypt.hashSync(req.body.password, 8),
    designation,
    department
  });

  try {
    employee.save()
      .then(res.send("saved"))
    console.log(employee);


  } catch (err) {
    res.status(422).send(err);
  }

};


