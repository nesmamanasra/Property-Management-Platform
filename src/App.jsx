import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import DashboardHome from "./pages/dashboard/DashboardHome";
// import AqariStorePage form "./pages/aqari-store/AqariStorePage";
import AqariStorePage from "./pages/aqari-store/AqariStorePage";
// import Owners from "./pages/dashboard/Owners";
// import Tenants from "./pages/dashboard/Tenants";
import DashboardLayout from "./components/layout/DashboardLayout";
//import ProtectedRoute from "./auth/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
// import OwnersPage from "./pages/dashboard/OwnersPage";
import { form } from "framer-motion/client";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />

        <Route
          path="/dashboard"
          element={<DashboardLayout />
 }
        >
          <Route index element={<DashboardHome />} />
          {/* <Route path="owners" element={<Owners />} />
          <Route path="tenants" element={<Tenants />} /> */}
        </Route>

         <Route path="/aqari-store" element={<AqariStorePage />} />
      {/* <Route path="/dashboard" element={<DashboardLayout />}> */}
      {/* <Route index element={<DashboardHome />} /> */}
    {/* هون نضيفها */}
      {/* <Route path="owners" element={<OwnersPage />} /> */}
        {/* </Route> */}
      </Routes>

      
    </>
  );
}