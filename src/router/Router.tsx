import App from "@/App";
import Dashboard from "@/pages/Dashboard";
import LoginPage from "@/pages/Login";
import Management from "@/pages/Management";
import ManageSource from "@/pages/ManageSource";
import AddSource from "@/pages/AddSource";
import SignUpPage from "@/pages/Signup";
import { Routes, Route } from "react-router-dom";
import ManageAlarms from "@/pages/ManageAlarms";
import PrivateRoute from "./PrivateRoute";
import LogoutPage from "@/pages/LogoutPage";
import AboutUs from "@/pages/AboutUs";
import Faces from "@/pages/Faces";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/chamber" element={<SignUpPage />} />
    <Route element={<PrivateRoute />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manage" element={<Management />} />
      <Route path="/source" element={<ManageSource />} />
      <Route path="/alarms" element={<ManageAlarms />} />
      <Route path="/add-source" element={<AddSource />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/face-ids" element={<Faces />} />
      <Route path="/logout" element={<LogoutPage />} />
    </Route>
  </Routes>
);
export default Router;
