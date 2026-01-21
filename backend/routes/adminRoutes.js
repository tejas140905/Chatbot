const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const admin = require("../controllers/adminController");
const rules = require("../controllers/ruleController");

router.post("/login", admin.login);

router.get("/rules", auth, rules.getRules);
router.post("/rules", auth, rules.addRule);
router.delete("/rules/:id", auth, rules.deleteRule);

module.exports = router;
