import ChatWidget from "./components/ChatWidget";
import "./App.css";

const highlights = [
  { title: "Smart rules", detail: "Auto-triage with intent-aware routing." },
  { title: "Human handoff", detail: "Escalate seamlessly with context." },
  { title: "Analytics", detail: "Live sentiment, wait time & CSAT view." }
];

const perks = [
  "Instant answers for common questions",
  "Context from previous chats preserved",
  "Works across web, email, and chat",
  "No-code rules for quick tweaks"
];

export default function App() {
  return (
    <div className="page">
      <div className="bg-glow"></div>

      <header className="nav">
        <div className="logo-mark">RBC</div>
        <div className="brand">
          <p className="eyebrow">Rule-Based</p>
          <p className="brand-name">Customer Support</p>
        </div>
        <div className="nav-actions">
          <button className="ghost">Docs</button>
          <button className="primary">Launch console</button>
        </div>
      </header>

      <main className="hero">
        <section className="hero-content">
          <p className="eyebrow">Live in minutes</p>
          <h1>
            Design support flows that feel human,
            <span> even when they are automated.</span>
          </h1>
          <p className="lede">
            A sleek support cockpit to chat with users, deflect repetitive
            tickets, and keep humans in the loop with crystal clear context.
          </p>
          <div className="cta-row">
            <button className="primary">Start a conversation</button>
            <button className="ghost">View rule playbooks</button>
          </div>
          <div className="metrics">
            <div>
              <p className="metric-number">92%</p>
              <p className="metric-label">Resolved by rules</p>
            </div>
            <div>
              <p className="metric-number">-58%</p>
              <p className="metric-label">Avg. handle time</p>
            </div>
            <div>
              <p className="metric-number">+21</p>
              <p className="metric-label">NPS lift</p>
            </div>
          </div>
        </section>

        <section className="panel-grid">
          <div className="card glass">
            <div className="card-header">
              <p className="eyebrow">Playbooks</p>
              <p className="pill">Realtime</p>
            </div>
            <div className="rule-list">
              {highlights.map(item => (
                <div key={item.title} className="rule-item">
                  <div className="dot"></div>
                  <div>
                    <p className="rule-title">{item.title}</p>
                    <p className="rule-desc">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "78%" }} />
            </div>
            <p className="progress-label">
              78% of inbound tickets handled automatically
            </p>
          </div>

          <div className="card stacked">
            <div className="stacked-top">
              <p className="eyebrow">Experience</p>
              <h3>Every reply feels considered.</h3>
              <ul className="perks">
                {perks.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="stacked-bottom">
              <div>
                <p className="metric-number">24/7</p>
                <p className="metric-label">Coverage</p>
              </div>
              <div>
                <p className="metric-number">15s</p>
                <p className="metric-label">First response</p>
              </div>
              <div>
                <p className="metric-number">2x</p>
                <p className="metric-label">Agent capacity</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ChatWidget />
    </div>
  );
}
