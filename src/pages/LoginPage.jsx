import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { auth } from "../auth/auth";

export default function LoginPage() {
  const nav = useNavigate();

  const onLogin = () => {
    auth.login();
    nav("/dashboard", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA] px-6">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white border border-[#E6ECF3] rounded-2xl shadow-xl p-6"
      >
        <h1 className="text-2xl font-bold text-[#102A43]">Temporary Login</h1>
        <p className="text-sm text-gray-600 mt-2">
          تسجيل دخول مؤقت لتجربة الربط مع الداشبورد.
        </p>

        <button
          onClick={onLogin}
          className="mt-6 w-full py-3 rounded-xl bg-[#1F3C88] text-white shadow-lg hover:opacity-90 transition"
        >
          Log In
        </button>

        <button
          onClick={() => nav("/", { replace: true })}
          className="mt-3 w-full py-3 rounded-xl border border-[#E6ECF3] bg-white text-[#102A43]"
        >
          Back to Landing
        </button>
      </motion.div>
    </div>
  );
}