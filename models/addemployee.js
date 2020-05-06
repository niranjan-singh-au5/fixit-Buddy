const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addemployeeSchema = new Schema({
    id :{type : Number},
    firstname:{type:String},
    lastname:{type:String},
    department:{type:String},
    title:{type:String},
    mobile:{type:Number},
    email:{type:String},
    address:{type:String},
    state:{type:String},
    nationality:{type:String},
    experience:{type:String},
    Hdate:{type:Number},
    Bdate:{type:Number}
})

var addemployee = mongoose.model('employee',addemployeeSchema);

module.exports = addemployee;