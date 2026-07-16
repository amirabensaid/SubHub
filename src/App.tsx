<<<<<<< HEAD
import Hero from './components/Hero.tsx';

export default function App() {
  return <Hero />;
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
>>>>>>> 231f78577e3627c4e0aeac561146de252771739d
}