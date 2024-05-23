const mongoose = require('mongoose');
const Employee = mongoose.model('employee');
const WorkPermit = mongoose.model('workpermit');


exports.delete = (req, res) => {
  const { tokenNumber } = req.body;
  const myQuery = {tokenNumber: tokenNumber}

  

  try {
    Employee.findOneAndRemove(myQuery)
    .then(res.send("deleted"))
    console.log(myQuery+"item deleted");


  } catch (err) {
    res.status(422).send(err);
  }

};



exports.deletePermit = (req, res) => {
  const { _id } = req.body;
  const myQuery = {_id: _id}

  

  try {
    WorkPermit.findOneAndRemove(myQuery)
    .then(res.send("deleted"))
    console.log(myQuery+"item deleted");


  } catch (err) {
    res.status(422).send(err);
  }

};

exports.changePermitDetails = (req, res) => {
  console.log(req.body);

  try{
    WorkPermit.findOneAndUpdate({_id: req.body.id}, req.body.after, {
      returnOriginal: false
    })
    .then(res.send("updated"))
  }
  catch (err){
    res.send(422).send(err);
  }
  
}

exports.update = (req, res) => {
  console.log(req.body);

  try{
    Employee.findOneAndUpdate({employeeName: req.body.before}, req.body.after, {
      returnOriginal: false
    })
    .then(res.send("updated"))
  }
  catch (err){
    res.send(422).send(err);
  }
  
}

exports.updatepermit = (req, res) => {
  

  try{
    WorkPermit.findOneAndUpdate({_id: req.body._id}, {verifiedAreaManager: "true"}, {
      returnOriginal: false
    })
    .then(res.send("approved"))
  }
  catch (err){
    res.send(422).send(err);
  }
}

exports.approvepermitbymfg = (req,res) => {
  try{
    WorkPermit.findByIdAndUpdate({_id : req.body._id}, {verifiedMfgHead: true}, {
      returnOriginal: false
    })
    .then(res.send("approved by Mfg Head"))
  }
  catch (err){
    res.send(422).send(err);
  }
}

exports.approvepermitbysafetymanager = (req, res) => {
  try{
    WorkPermit.findByIdAndUpdate({_id: req.body._id}, {verifiedSafetyManager: true}, {
      returnOriginal: false
    })
    .then(res.send("approved by safety manager"))
  }
  catch (err){
    res.send(422).send(err);
  }
}


exports.closeworkpermit = (req, res) => {
  try{
    WorkPermit.findByIdAndUpdate({_id: req.body._id}, {isActive: false, closedWorkPermit: true}, {
      returnOriginal: false
    })
    .then(res.send("work permit closed"))
  }
  catch (err){
    res.send(422).send(err);
  }
}


exports.mind = async (req, res) => {
  const data = await WorkPermit.find();
  var i;
  for(i=0; i<data.length; i++){
    if(data[i].closedWorkPermit === false){
      if(data[i].verifiedAreaManager === true){
        if(data[i].verifiedMfgHead === true){
          if(data[i].verifiedSafetyManager === true){
            try{
            await WorkPermit.findByIdAndUpdate({_id: data[i]._id}, {isActive: true}, {
              returnOriginal: false
            })
            .then(console.log(data[i].workPermitDescription + "permit is now active"))}
            catch (err){
              res.send(422).send(err);
            } 
          }
        }
      }
    } 
  }
  
}

