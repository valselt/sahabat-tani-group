import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import EmailCreate from "./pages/EmailCreate";
import EmailCode from "./pages/EmailCode";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordCode from "./pages/ForgotPasswordCode";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/create-with-email" element={<EmailCreate />} />
      <Route path="/email-code" element={<EmailCode />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-password-code" element={<ForgotPasswordCode />} />
    </Routes>
  );
}

export default App;
