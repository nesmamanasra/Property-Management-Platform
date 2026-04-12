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
    return (
      <div className="min-h-screen w-full overflow-x-hidden bg-[#F7F8FA]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F7F8FA]">
      <div className="w-full min-w-0">
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