import React from "react";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import MainSection from "../../components/dashboard/MainSection";
import TableData from "../../components/dashboard/TableData";

export default function DashboardHome() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col">

      {/* Navbar فوق الكل */}
      <Navbar />

      {/* تحته: Sidebar + Main */}
      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1">
          <MainSection />
          <TableData/>
        </div>
      </div>

    </div>
  );
}