import "./App.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

export default function MarketingPage() {
  return (
    <div className="page-shell">
      <header className="marketing-header">
        <div className="marketing-logo">
          <img src={logo} alt="SubTrack logo" className="logo" />
          <span className="brand-name">SubTrack</span>
        </div>
        <nav className="marketing-nav">
          <Link to="/signin" className="nav-link">Sign in</Link>
          <Link to="/signup" className="nav-button">Get started</Link>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-card">
          <div className="hero-brand">
            <img src={logo} alt="SubTrack logo" className="logo" />
            <span className="brand-name">SubTrack</span>
          </div>

          <div className="hero-badge">Smart subscription tracking for modern teams</div>

          <h1>
            Manage every client subscription
            <br />
            in one calm dashboard.
          </h1>

          <p>
            SubTrack helps freelancers, agencies, and growing businesses monitor
            renewals, upcoming payments, and client billing without spreadsheets
            or missed subscriptions.
          </p>

          <div className="buttons">
            <button className="primary">Start free</button>
            <button className="secondary">View features</button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>120+</strong>
              <span>active subscriptions</span>
            </div>
            <div>
              <strong>99.8%</strong>
              <span>renewal accuracy</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>visibility</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
