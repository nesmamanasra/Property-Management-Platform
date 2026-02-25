import { useNavigate } from "react-router-dom";
import { auth } from "../auth/auth";

export default function DashboardPage() {
  const nav = useNavigate();

  const logout = () => {
    auth.logout();
    nav("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white border border-[#E6ECF3] rounded-2xl shadow-xl p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#102A43]">Dashboard</h1>
            <button onClick={logout} className="px-4 py-2 rounded-lg bg-[#1F3C88] text-white">
              Logout
            </button>
          </div>

          <p className="mt-3 text-gray-600">
            هاي صفحة داشبورد مؤقتة — بعدين بنبنيها بنفس احترافية الواجهة.
          </p>
        </div>
      </div>
    </div>
  );
}