import Container from "../layout/Container";
import logo from "../../assets/logo_top.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white" >
      <Container className="pt-6">
        
        <div className="flex items-center justify-between">
          
          {/* اليمين - اللوجو */}
          <div className="flex items-center">
            <img src={logo} alt="Aqari" className="h-20 w-auto" />
          </div>

          {/* الوسط - المنيو */}
          <div className="hidden md:flex items-center gap-10 text-[18px] font-medium text-[#102A43]">
            <a href="#features" className="hover:opacity-80 transition font-bold">المميزات</a>
            <a href="#forwhom" className="hover:opacity-80 transition font-bold">لمن هذا النظام؟</a>
            <a href="#pricing" className="hover:opacity-80 transition font-bold">الأسعار</a>
            <a href="#contact" className="hover:opacity-80 transition font-bold">تواصل معنا</a>
          </div>

          {/* اليسار - البوتون */}
          <div>
            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2 rounded-lg text-white font-bold bg-gradient-to-b from-[#1F3C88] to-[#18346F] shadow-[0_10px_22px_rgba(31,60,136,0.30)] hover:opacity-95 transition"
            >
              ابدأ الآن
            </button>
          </div>

        </div>

      </Container>
    </nav>
  );
}