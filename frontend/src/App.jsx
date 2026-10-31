import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export default function App() {
  const [backendStatus, setBackendStatus] = useState("Checking...");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((response) => {
        if (!response.ok) throw new Error("Backend returned an error");
        return response.json();
      })
      .then((data) => setBackendStatus(data.status === "ok" ? "Connected" : "Unknown"))
      .catch(() => {
        setBackendStatus("Unavailable");
        setError("Start the FastAPI backend, then refresh this page.");
      });
  }, []);

  return (
    <main className="page">
      <nav className="nav">
        <div className="brand"><span className="brand-mark">H</span> HearAI</div>
        <span className="tag">Accessibility assistant</span>
      </nav>

      <section className="hero">
        <p className="eyebrow">WELCOME TO HEARAI</p>
        <h1>Communication and awareness, made more accessible.</h1>
        <p className="intro">
          HearAI brings speech captions, sign recognition and environmental
          sound awareness together in one assistant.
        </p>
        <div className="status">
          <span className={backendStatus === "Connected" ? "dot online" : "dot"} />
          Backend: <strong>{backendStatus}</strong>
        </div>
        {error && <p className="error">{error}</p>}
      </section>

      <section className="modules">
        <article className="module-card">
          <div className="icon">Aa</div>
          <h2>Speech to Text</h2>
          <p>Turn spoken English into readable live captions.</p>
          <span className="label">Planned module</span>
        </article>
        <article className="module-card">
          <div className="icon">手</div>
          <h2>ASL to Text</h2>
          <p>Recognize selected American Sign Language signs.</p>
          <span className="label">Planned module</span>
        </article>
        <article className="module-card">
          <div className="icon">◉</div>
          <h2>Sound Awareness</h2>
          <p>Identify important environmental sounds and safety events.</p>
          <span className="label">Planned module</span>
        </article>
      </section>

      <footer>HearAI · University project prototype</footer>
    </main>
  );
}
