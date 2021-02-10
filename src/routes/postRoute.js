const router = require("express").Router()
const {registerBeneficiary,registerClient,addAgent,addFees} = require("../controllers/postController");

router.route("/client").post(registerClient);
router.route("/beneficiary").post(registerBeneficiary);
router.route("/addagent").post(addAgent);
router.route("/addfees").post(addFees);

module.exports = router;