import React, { useState } from "react";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import PropertyForm from "../../components/dashboard/PropertyForm";
import TableData from "../../components/dashboard/TableData";

export default function PropertyPage() {
  const [editingItem, setEditingItem] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1">
          <TableData
            refreshKey={refreshKey}
            onEdit={(item) => setEditingItem(item)}
            renderAddButton={
              <PropertyForm
                editingItem={editingItem}
                setEditingItem={setEditingItem}
                onSuccess={() => setRefreshKey((prev) => prev + 1)}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}