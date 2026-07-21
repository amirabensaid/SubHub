
import "./App.css";
import { Link } from "react-router-dom";

const HERO_STATS = [
  { value: "120+", label: "active subscriptions" },
  { value: "99.8%", label: "renewal accuracy" },
  { value: "24/7", label: "visibility" },
];

const FEATURES = [
  {
    icon: "🔔",
    title: "Proactive Renewal Alerts",
    description: "Get notified via Slack or email 30, 14, and 7 days before any client tool renews.",
  },
  {
    icon: "📊",
    title: "Spend & Margin Analytics",
    description: "Instantly see total recurring costs per client and optimize software spend margins.",
  },
  {
    icon: "👥",
    title: "Client Workspace Separation",
    description: "Keep subscription portfolios separated by client with custom permissions for your team.",
  },
];

function BrandLogo({ className = "" }) {
  return (
    <div className={`marketing-logo ${className}`}>
      <img src="/logo.png" alt="SubTrack logo" className="logo" width="32" height="32" style={{ display: 'block' }} />
      <span className="brand-name">SubTrack</span>
    </div>
  );
}

export default function MarketingPage() {
  return (
    <div className="page-shell">
      {/* Navigation */}
      <header className="marketing-header">
        <Link to="/" className="brand-link" aria-label="SubTrack Homepage">
          <BrandLogo />
        </Link>
        <nav className="marketing-nav" aria-label="Main Navigation">
          <Link to="/signin" className="nav-link">
            Sign in
          </Link>
          <Link to="/signup" className="nav-button">
            Get started
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="marketing-content">
        {/* Hero Section */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-card">
            <div className="hero-badge" role="status">
              Smart subscription tracking for modern teams
            </div>

            <h1 id="hero-heading">
              Manage every client subscription
              <br />
              <span className="accent-text">in one calm dashboard.</span>
            </h1>

            <p className="hero-description">
              SubTrack helps freelancers, agencies, and growing businesses monitor
              renewals, upcoming payments, and client billing without spreadsheets
              or missed subscriptions.
            </p>

            <div className="buttons">
              <Link to="/signup" className="primary button">
                Start free trial
              </Link>
              <a href="#features" className="secondary button">
                Explore features
              </a>
            </div>

            {/* Hero Stats */}
            <ul className="hero-stats">
              {HERO_STATS.map((stat, index) => (
                <li key={index} className="stat-item">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section className="dashboard-preview-section">
          <div className="preview-container">
            <div className="browser-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="browser-title">app.subtrack.io/dashboard</span>
            </div>
            <div className="dashboard-frame">
              {/* Product UI visual representation */}
              <div className="mockup-ui">
                <div className="mockup-header">
                  <div>
                    <h3>Client Overview: Acme Corp</h3>
                    <span className="subtext">12 Subscriptions active</span>
                  </div>
                  <span className="status-pill active">Monthly Cost: $2,450/mo</span>
                </div>
                <div className="mockup-grid">
                  <div className="mockup-card">
                    <strong>Figma Team</strong>
                    <span className="text-muted">Renews in 3 days</span>
                    <strong className="amount">$180.00</strong>
                  </div>
                  <div className="mockup-card">
                    <strong>AWS Infrastructure</strong>
                    <span className="text-muted">Renews in 12 days</span>
                    <strong className="amount">$1,240.00</strong>
                  </div>
                  <div className="mockup-card">
                    <strong>HubSpot CRM</strong>
                    <span className="text-muted">Renews in 28 days</span>
                    <strong className="amount">$800.00</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <h2>Everything you need to eliminate subscription leaks</h2>
          <p className="section-subtext">Designed specifically for agencies managing multi-client software stacks.</p>

          <div className="features-grid">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}