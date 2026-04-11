import { Outlet } from "react-router-dom";
import Loader from "../../components/landing/Loader";
import {
  DashboardDataProvider,
  useDashboardData,
} from "../../context/DashboardDataContext";

function PublicLayoutContent() {
  const { loading, initialized } = useDashboardData();

  if (!initialized) {
      return <Loader />;
    }

  return <Outlet />;
}

export default function PublicLayout() {
  return (
    <DashboardDataProvider>
      <PublicLayoutContent />
    </DashboardDataProvider>
  );
}