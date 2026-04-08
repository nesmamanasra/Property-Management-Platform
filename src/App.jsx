import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPages from "./pages/SignupPages";
import DashboardHome from "./pages/dashboard/DashboardHome";
import AqariStorePage from "./pages/aqari-store/AqariStorePage";
import ShowPropertyPage from "./pages/aqari-store/ShowPropertyPage";
import ScrollToTop from "./components/ScrollToTop";
import OwnersPage from "./pages/dashboard/OwnersPage";
import PropertyPage from "./pages/dashboard/PropertyPage";
import ProtectedRoute from "./auth/ProtectedRoute";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPages />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/owners"
          element={
            <ProtectedRoute>
              <OwnersPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/property"
          element={
            <ProtectedRoute>
              <PropertyPage />
            </ProtectedRoute>
          }
        />

        <Route path="/aqari-store" element={<AqariStorePage />} />
        <Route path="/property/:id" element={<ShowPropertyPage />} />
      </Routes>
    </>
  );
}