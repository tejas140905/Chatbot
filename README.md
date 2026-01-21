# 🤖 Rule-Based Customer Support Chatbot

A full-stack **rule-based customer support chatbot** built using **React, Node.js, Express, and MySQL**.  
This works completely on **keyword-based rules** stored in the database.

---

## 🚀 Features

### 👤 User Side
- Modern floating chatbot UI (SaaS / Fintech style)
- WhatsApp-style chat experience
- Instant replies using keyword matching
- Polite fallback response if no rule matches
- Clean and responsive UI (desktop & mobile)

### 🛠️ Admin / Backend
- Rule-based chatbot logic (no AI, no paid APIs)
- Rules stored in database (keywords + responses)
- Secure backend with Express.js
- Chat history storage
- Environment variable based configuration

---

## 🧠 Chatbot Logic (How It Works)

- User message is converted to lowercase
- Message is matched against keywords stored in database
- If all keywords of a rule match → corresponding response is sent
- If no rule matches → fallback message is shown

Example:
