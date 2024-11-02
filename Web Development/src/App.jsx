import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import EmailCreate from "./pages/EmailCreate";
import EmailCode from "./pages/EmailCode";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/create-with-email" element={<EmailCreate />} />
      <Route path="/email-code" element={<EmailCode />} />
    </Routes>
  );
}

export default App;
