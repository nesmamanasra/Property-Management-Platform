import Container from "../layout/Container";
import logo from "../../assets/logo_top.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate(); // ✅ إضافة

  return (
    <nav className="bg-[#F5F7FA]">
      <Container className="pt-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          
          <div className="flex items-center">
            <img src={logo} alt="Aqari" className="h-20 w-auto" />
          </div>

          <div className="hidden md:flex items-center justify-center gap-10 text-[18px] font-medium text-[#102A43]">
            <a href="#features" className="hover:opacity-80 transition font-bold">Features</a>
            <a href="#forwhom" className="hover:opacity-80 transition font-bold">For Whom?</a>
            <a href="#pricing" className="hover:opacity-80 transition font-bold">Pricing</a>
            <a href="#contact" className="hover:opacity-80 transition font-bold">Contact Us</a>
          </div>

          <div className="flex items-center justify-end gap-3">

            <button
             onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-lg text-white font-bold bg-gradient-to-b from-[#1F3C88] to-[#18346F] shadow-[0_10px_22px_rgba(31,60,136,0.30)] hover:opacity-95 transition">
              Get Started
            </button>

          </div>
        </div>
      </Container>
    </nav>
  );
}