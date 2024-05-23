const mongoose = require('mongoose');
const WorkPermit = mongoose.model('workpermit');
const Employee = mongoose.model('employee');
const Area = mongoose.model('area');

module.exports = app => {


    app.post('/api/newworkpermit',(req, res) => {
        
        const { initiatorName, workPermitDescription, manPowerInvolved, area, workPermitType, priority, isActive, verifiedAreaManager, verifiedSafetyManager, verifiedMfgManager } = req.body;

        const workpermit = new WorkPermit({
            initiatorName,
            workPermitDescription,
            manPowerInvolved,
            area,
            workPermitType,
            priority,
            isActive,
            verifiedAreaManager,
            verifiedMfgManager,
            verifiedSafetyManager
        });

        try {
            workpermit.save()
            .then(res.send("saved"))
            console.log(workpermit);
            

        } catch (err) {
            res.status(422).send(err);
        }
    })

    app.get('/api/workpermit', async (req, res) => {
        const workPermitView = await WorkPermit.find({});
        res.send(workPermitView);

    });

    app.get('/api/allemployee', async (req, res) => {
        const employeeView = await Employee.find({});
        res.send(employeeView);

    });

    app.post('/api/editemployee', async (req,res) => {
        const employeeView = await Employee.find({ employeeName: req.body.employeeName});
        res.send(employeeView);
    })


    app.post('/api/editpermit', async (req,res) => {
        console.log(req.body._id)
        const permitViewById = await WorkPermit.find({ _id: req.body._id});
        res.send(permitViewById);
    })

    app.get('/api/getarea',async (req, res) => {
        const area = await Area.find({});
        res.send(area);
    })

    app.post('/api/addarea', (req, res)  => {
        console.log(req.body);
        

        const areaName = new Area({
            area: req.body.area,
            caption: req.body.caption
        });

        try{
            areaName.save()
            .then(res.send("saved"))
          } catch(err) {
            res.status(422);
          }


    })


    
    
}