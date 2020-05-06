const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
    id:{
        type: Number,
    },

    firstname:{
        type: String,
        required: 'This field is required',
    },
    lastname:{
        type: String,
    },
    Fullname:{
        type:String, required:true, unique: true,
    },
    gender:{
        type: String,
    },
    mobile:{
        type:Number, required: true,
    },
    email:{
        type:String, required: true,
    },
    password:{
        type:String, required: true,
    },
   

})

// Custom validation for email
adminSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Admin', adminSchema);
module.exports = Admin;