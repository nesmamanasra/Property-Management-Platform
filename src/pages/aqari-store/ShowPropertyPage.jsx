import React, { useState } from "react";
import NavbarStore from "../../components/aqari-store/NavbarStore";
// import MainAqariStore from "../../components/aqari-store/MainAqariStore";

export default function AqariStorePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full">
      <NavbarStore
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* <MainAqariStore searchQuery={searchQuery} /> */}
    </div>
  );
}
