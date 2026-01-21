const db = require("../config/db");

exports.getRules = (req, res) => {
  db.query("SELECT * FROM chatbot_rules", (err, rules) => {
    if (err) return res.status(500).json({ message: "Error fetching rules" });
    res.json(rules);
  });
};

exports.addRule = (req, res) => {
  const { keywords, response, category } = req.body;

  db.query(
    "INSERT INTO chatbot_rules (keywords, response, category) VALUES (?, ?, ?)",
    [keywords, response, category],
    (err) => {
      if (err) return res.status(500).json({ message: "Error adding rule" });
      res.json({ message: "Rule added successfully" });
    }
  );
};

exports.deleteRule = (req, res) => {
  db.query(
    "DELETE FROM chatbot_rules WHERE id = ?",
    [req.params.id],
    () => res.json({ message: "Rule deleted successfully" })
  );
};
