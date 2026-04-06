import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import DashboardHome from "./pages/dashboard/DashboardHome";
import AqariStorePage from "./pages/aqari-store/AqariStorePage";
import ScrollToTop from "./components/ScrollToTop";
import OwnersPage from "./pages/dashboard/OwnersPage";
import PropertyPage from "./pages/dashboard/PropertyPage";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />

        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/owners" element={<OwnersPage />} />
        <Route path="/dashboard/property" element={<PropertyPage />} />

        <Route path="/aqari-store" element={<AqariStorePage />} />
      </Routes>
    </>
  );
}