import App from "@/App";
import Dashboard from "@/pages/Dashboard";
import LoginPage from "@/pages/Login";
import Management from "@/pages/Management";
import ManageSource from "@/pages/ManageSource";
import AddSource from "@/pages/AddSource";
import SignUpPage from "@/pages/Signup";
import { Routes, Route } from "react-router-dom";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/login" element={<LoginPage />} />

    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/manage" element={<Management />} />
    <Route path="/source" element={<ManageSource />} />
    <Route path="/add-source" element={<AddSource />} />
  </Routes>
);
export default Router;
