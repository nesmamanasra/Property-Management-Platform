import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#f7f7fb]">
      <Sidebar />

      <div className="ml-[240px] min-h-screen">
        <Navbar />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}