import React from "react";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import Messages from "../../components/dashboard/Messages";


export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">
          <Messages />
        </div>
      </div>
    </div>
  );
}