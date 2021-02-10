const router = require("express").Router();

const {getBeneficiaries,getClients,getAgents,getFees} = require("../controllers/getController");

router.route("/agents").get(getAgents);
router.route("/fees").get(getFees);
router.route("/beneficiaries").get(getBeneficiaries);
router.route("/clients").get(getClients);

module.exports = router
