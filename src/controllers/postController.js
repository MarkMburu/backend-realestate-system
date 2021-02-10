const db = require("../models");

const registerClient =(req,res)=>{
    db.Client.create(req.body)
    .then((data)=>res.status(201).json(data))
    .catch(err=> res.status(400).json({"Error":err}))
}
const registerBeneficiary = (req,res) =>{
   db.Beneficiary.create(req.body)
   .then((data)=> res.status(201).json(data))
   .catch(err => res.status(400).json({"Error":err}))
}
const addAgent=(req,res)=>{
  db.Agent.create(req.body)
  .then((data)=> res.status(201).json(data))
  .catch((err)=> res.status(400).json({"Error":err}))
}
const addFees = (req,res)=>{
    db.Fees.create(req.body)
    .then((data)=>res.status(201).json(data))
    .catch((err)=>res.status(400).json({"Error":err}))
}
module.exports ={
    registerClient,
    registerBeneficiary,
    addAgent,
    addFees
}