import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPages from "./pages/SignupPages";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import DashboardHome from "./pages/dashboard/DashboardHome";
import AqariStorePage from "./pages/aqari-store/AqariStorePage";
import ShowPropertyPage from "./pages/aqari-store/ShowPropertyPage";
import ScrollToTop from "./components/ScrollToTop";
import OwnersPage from "./pages/dashboard/OwnersPage";
import PropertyPage from "./pages/dashboard/PropertyPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import MessagesPage from "./pages/dashboard/MessagesPage";
import DashboardLayout from "./components/layout/DashboardLayout";
import PublicLayout from "./components/layout/PublicLayout";
import AdminProfilePage from "./pages/dashboard/AdminProfilePage";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPages />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="aqari-store" element={<AqariStorePage />} />
          <Route path="property/:id" element={<ShowPropertyPage />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="owners" element={<OwnersPage />} />
          <Route path="property" element={<PropertyPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="profile" element={<AdminProfilePage />} />
        </Route>
      </Routes>
    </>
  );
}