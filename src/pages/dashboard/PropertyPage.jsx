import React, { useState } from "react";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import PropertyForm from "../../components/dashboard/PropertyForm";
import TableData from "../../components/dashboard/TableData";
import { useDashboardData } from "../../context/DashboardDataContext";

export default function PropertyPage() {
  const [editingItem, setEditingItem] = useState(null);
  const { setProperties, owners } = useDashboardData();

  const handlePropertySuccess = (property, type) => {
    setProperties((prev) => {
      const ownerData = owners.find(
        (owner) => String(owner.id) === String(property.owner_id)
      );

      const normalizedProperty = {
        ...property,
        owners: ownerData
          ? { full_name: ownerData.full_name }
          : property.owners || { full_name: "—" },
      };

      if (type === "insert") {
        const exists = prev.some((item) => item.id === normalizedProperty.id);
        if (exists) return prev;
        return [normalizedProperty, ...prev];
      }

      if (type === "update") {
        return prev.map((item) =>
          item.id === normalizedProperty.id ? normalizedProperty : item
        );
      }

      return prev;
    });
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1">
          <TableData
            onEdit={(item) => setEditingItem(item)}
            renderAddButton={
              <PropertyForm
                editingItem={editingItem}
                setEditingItem={setEditingItem}
                onSuccess={handlePropertySuccess}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}