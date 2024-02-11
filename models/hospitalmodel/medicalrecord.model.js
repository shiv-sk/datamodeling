const mongoose = require('mongoose');

const medicalrecordSchema = new mongoose.Schema({},{timestamps:true})

const MedRecord = mongoose.model('MedRecord' , medicalrecordSchema);
module.exports = MedRecord