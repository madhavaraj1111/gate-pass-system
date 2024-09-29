import LoginPage from "./loginPage/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./loginPage/RegisterForm";
import ForgotPassword from "./loginPage/ForgotPassword";

function App() {
  return (
    <div className="font-nunito">
      <Router>
        <Routes>
          <Route path="/gate-pass-system" element={<LoginPage />} />
          <Route path="/gate-pass-system/register" element={<RegisterForm />} />
          <Route
            path="/gate-pass-system/forgot-password"
            element={<ForgotPassword />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
