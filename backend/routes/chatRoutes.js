const router = require("express").Router();
const { chatBot } = require("../controllers/chatController");

router.post("/", chatBot);

module.exports = router;
