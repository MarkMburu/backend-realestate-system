const mongoose = require("mongoose");
const {Schema} = mongoose;

const feeSchema = new Schema({
  accountNo:{
      type: String
  },
  depositeDate:{
      type: Date
  },
 accountDebit:{
     type: String
 },
 paymentRef: {
   type: String
 }},{
     timestamps: true
})

module.exports = mongoose.model("Fees",feeSchema)