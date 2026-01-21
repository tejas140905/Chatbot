const db = require("../config/db");
const matchRule = require("../utils/ruleMatcher");

exports.chatBot = (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "Message is required" });
  }

  db.query("SELECT * FROM chatbot_rules", (err, rules) => {
    if (err) {
      return res.status(500).json({ reply: "Server error" });
    }

    const matchedRule = matchRule(message, rules);

    let botReply = matchedRule
      ? matchedRule.response
      : "Sorry, I couldn’t understand your query. Please contact human support.";

    db.query(
      "INSERT INTO chat_history (user_message, bot_response) VALUES (?, ?)",
      [message, botReply]
    );

    res.json({ reply: botReply });
  });
};
