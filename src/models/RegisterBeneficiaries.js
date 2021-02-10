const mongoose = require("mongoose");

const {Schema} = mongoose;

const beneficiarySchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    middleName:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    id:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    allocation:{
        type: Number,
        required: true
    }},
    {
    timestamps: true    
})
module.exports = mongoose.model("Beneficiary",beneficiarySchema)