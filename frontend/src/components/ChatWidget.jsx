import { useEffect, useRef, useState } from "react";
import { sendMessage } from "../services/api";

const quickSuggestions = [
  "Track my order",
  "Update my email",
  "Talk to a human",
  "Cancel & refund policy"
];

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey there 👋 I’m your support copilot. What brings you in today?" }
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isSending]);

  const pushMessage = (sender, text) => {
    setMessages(prev => [...prev, { sender, text }]);
  };

  async function handleSend(forcedText) {
    const text = (forcedText ?? input).trim();
    if (!text || isSending) return;

    pushMessage("user", text);
    setInput("");
    setIsSending(true);

    try {
      const res = await sendMessage(text);
      const reply =
        res?.reply?.trim() ||
        "I couldn’t reach the brain right now, but I’m here and still listening.";
      pushMessage("bot", reply);
    } catch (err) {
      pushMessage("bot", "We hit a snag connecting. Try again in a moment.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="chat-widget">
      <div className="chat-header">
        <div className="avatar">CS</div>
        <div className="chat-meta">
          <p className="brand-name">Customer Support</p>
          <p className="status">
            <span className="status-dot" /> Online · Avg response ~15s
          </p>
        </div>
      </div>

      <div className="quick-row" aria-label="Quick suggestions">
        {quickSuggestions.map(suggestion => (
          <button
            key={suggestion}
            className="chip"
            type="button"
            onClick={() => handleSend(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>

      <div className="chat-body" ref={chatRef}>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`bubble-row ${msg.sender === "user" ? "user" : "bot"}`}
          >
            <div className={`bubble ${msg.sender}`}>{msg.text}</div>
          </div>
        ))}
        {isSending && (
          <div className="bubble-row bot">
            <div className="bubble bot typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>

      <div className="composer">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSend()}
          placeholder="Write a message..."
          aria-label="Message input"
        />
        <button
          className="send-btn"
          type="button"
          onClick={() => handleSend()}
          disabled={!input.trim() || isSending}
        >
          {isSending ? "Sending…" : "Send"}
        </button>
      </div>
    </div>
  );
}
