function matchRule(message, rules) {
  const userMessage = message.toLowerCase();

  for (let rule of rules) {
    const keywords = rule.keywords.split(",");
    const matched = keywords.every(keyword =>
      userMessage.includes(keyword.trim().toLowerCase())
    );

    if (matched) {
      return rule;
    }
  }
  return null;
}

module.exports = matchRule;
