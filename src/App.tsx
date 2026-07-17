import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import MarketingPage from './MarketingPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarketingPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/marketing" element={<MarketingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
