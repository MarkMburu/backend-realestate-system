const mongoose = require("mongoose")

const {Schema} = mongoose;

const agentSchema = new Schema({
    fullname:{
        type: String,
        required: true
    },
    Id:{
        type: String,
        required: true
    },
    mobile:{
        type:Number,
        required: true
    },
    email:{
        type: String
    }},
    {
        timestamps: true
    }
) 

module.exports = mongoose.model("Agent",agentSchema)