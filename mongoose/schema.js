var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Schema for patient entity
var PatientSchema = new Schema({
    SSN : Number,
    name : String,
    address : String,
    age : Number
})

//Schema for Doctor entity
var DoctorSchema = new Schema({
    SSN : Number,
    name : String,
    year_of_experience : Number,
    specialty : String
})

//Schema for Drug entity
var DrugSchema = new Schema({
    trade_name : String,
    formula : String
})

//Schema for Company
var CompanySchema = new Schema({
    name : String,
    phone_number : Number
})

//Schema for Pharmacy
var PharmacySchema = new Schema({
    name : String,
    address : String,
    phone_number : Number
})

module.exports = mongoose.model("Patient", PatientSchema);
module.exports = mongoose.model("Doctor", DoctorSchema);
module.exports = mongoose.model("Drug", DrugSchema);
module.exports = mongoose.model("Company", CompanySchema);
module.exports = mongoose.model("Pharmacy", PharmacySchema);