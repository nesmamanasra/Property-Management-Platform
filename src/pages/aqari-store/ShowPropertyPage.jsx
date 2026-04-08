import React, { useState } from "react";
import NavbarStore from "../../components/aqari-store/NavbarStore";
import ShowProperty from "../../components/aqari-store/ShowProperty";

export default function AqariStorePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full">
      <NavbarStore
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
       <ShowProperty/>
      
    </div>
  );
}
