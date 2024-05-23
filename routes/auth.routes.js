const checkDuplicateTokenNumber  = require("../middlewares/verifySignUp");
const controller = require("../controllers/auth.controller");
const mongoose = require('mongoose');
const Employee = mongoose.model('employee')
var bcrypt = require("bcryptjs");
const deleteUpdateController = require("../controllers/data.controller");



module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/newemployee",
    checkDuplicateTokenNumber,
    controller.signup
  );

  app.post("/api/employee", (req, res) => {
    Employee.findOne({
      tokenNumber: req.body.tokenNumber
    })
      .exec((err, user) => {
        if (err) {
          res.status(500).send({ message: "err" });
          return;
        }
  
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
  
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
  
        if (!passwordIsValid) {
          return res.status(401).send({
            message: "Invalid Password!"
          });
        }
  
        const current_user = {
          id: user._id,
          employeeName: user.employeeName,
          tokenNumber: user.tokenNumber,
          department: user.department,
          designation: user.designation
        }
        
        
  
        res.status(200).send(current_user);
      });
  });

  app.post('/api/deleteuser',
  deleteUpdateController.delete
  )

  app.post('/api/updateuser',
  deleteUpdateController.update
  )

  app.post('/api/deletepermit',
  deleteUpdateController.deletePermit)

  app.post('/api/updatepermit',
  deleteUpdateController.changePermitDetails)

  app.post('/api/approvepermit',
  deleteUpdateController.updatepermit)

  app.post('/api/approveByMfg',
  deleteUpdateController.approvepermitbymfg)

  app.post('/api/approveBySafetyManager',
  deleteUpdateController.approvepermitbysafetymanager)


  app.post('/api/closeworkpermit',
  deleteUpdateController.closeworkpermit)

  app.post('/api/mind', 
  deleteUpdateController.mind)


};
