const mongoose = require('mongoose');
const Employee = mongoose.model('employee')

const checkDuplicateTokenNumber = (req, res, next) => {
  // Username
  Employee.findOne({
    tokenNumber: req.body.tokenNumber
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

  next();
  });
};




module.exports = checkDuplicateTokenNumber;
