const  mongoose = require("mongoose");

const {Schema} = mongoose;

const RegisterClientSchema = new Schema({
    accountType:{
        type:String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    middleName:{
        type: String,
        require: true
    },
    surname:{
        type: String,
        required: true
    },
    id: {
        type: Number,
        require: true
    },
    kraPin:{
        type: String,
    },
    gender:{
        type: String,
        required: true
    },
    maritalStatus:{
        type: String,
    },
    yob:{
        type: Date,
        required: true
    },
    country: {
        type: String,
    },
    email:{
        type: String,
    },
    mobile:{
        type: Number,
    },
    alternativeMobile:{
        type: Number
    },
   agentName:{
       type: String
   },
   branch:{
       type: String
   }
},
   {
       timestamps: true
})

module.exports = mongoose.model("Client",RegisterClientSchema)