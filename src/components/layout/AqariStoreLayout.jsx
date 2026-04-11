import { Outlet } from "react-router-dom";
import Loader from "../../components/landing/Loader";
import {
  DashboardDataProvider,
  useDashboardData,
} from "../../context/DashboardDataContext";

function AqariStoreLayoutContent() {
  const { loading, initialized } = useDashboardData();

 if (!initialized) {
     return <Loader />;
   }

  return <Outlet />;
}

export default function AqariStoreLayout() {
  return (
    <DashboardDataProvider>
      <AqariStoreLayoutContent />
    </DashboardDataProvider>
  );
}