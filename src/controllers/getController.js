const db = require("../models");

const getClients=(req,res)=>{
   db.Client.find({})
   .then(data => res.status(200).json(data))
   .catch(err => res.staus(400).json({"Error": err}))
}
const getFees=(req,res)=>{
      db.Fees.find({}) 
      .then(data => res.status(200).json(data))
      .catch(err => res.status(400).json({"Error":err}))
}
const getBeneficiaries=(req,res)=>{
    db.Beneficiary.find({})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({"Error": err}))
}
const getAgents=(req,res)=>{
    db.Agent.find({})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({"Error": err}))
}
module.exports = {
   getClients,
   getFees,
   getBeneficiaries,
   getAgents
}