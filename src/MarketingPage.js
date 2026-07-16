import "./App.css";
import logo from "./assets/logo.png";

import LogoCollection from "./components/LogoCollection";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";

export default function MarketingPage() {
  return (
    <div className="hero">

      <img
        src={logo}
        alt="SubTrack"
        className="logo"
      />

      <h1>
        Manage Your <span>Clients</span>
        <br />
        Track Every Subscription
      </h1>

      <p>
        SubTrack helps freelancers, consultants and agencies manage
        clients, subscriptions and recurring payments from one simple
        dashboard.
      </p>

      <div className="buttons">

        <button className="primary">
          Start for Free
        </button>

        <button className="secondary">
          Learn More
        </button>

      </div>

      <LogoCollection />

      <Testimonials />

      <Pricing />

    </div>
  );
}