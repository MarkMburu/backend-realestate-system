const db = require("../models");

const getClients=(req,res)=>{
   db.Client.find({})
   .then(data => req.status(200).json(data))
   .catch(err => res.staus(200).json({"Error": err}))
}

module.exports = {

}