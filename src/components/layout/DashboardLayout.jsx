import React from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../components/landing/Loader";
import {
  DashboardDataProvider,
  useDashboardData,
} from "../../context/DashboardDataContext";

function DashboardLayoutContent() {
  const { initialized } = useDashboardData();

  if (!initialized) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen overflow-x-auto bg-[#F7F8FA]">
      <div style={{ zoom: 0.8 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default function DashboardLayout() {
  return (
    <DashboardDataProvider>
      <DashboardLayoutContent />
    </DashboardDataProvider>
  );
}