const mongoose = require('mongoose');


const workPermitSchema = new mongoose.Schema({
    initiatorName: String,
    workPermitDescription: String,
    manPowerInvolved: String,
    area: String,
    workPermitType: String,
    priority: String,
    time : { type : Date, default: Date.now },
    isActive: {type: Boolean, default: false},
    verifiedAreaManager: {type: Boolean, default: false},
    verifiedSafetyManager: {type: Boolean, default: false},
    verifiedMfgHead: {type: Boolean, default: false},
    closedWorkPermit: {type: Boolean, default: false}
})

mongoose.model('workpermit', workPermitSchema);

