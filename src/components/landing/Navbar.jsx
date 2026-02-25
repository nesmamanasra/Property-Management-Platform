import Container from "../layout/Container";
import logo from "../../assets/logo_top.png";

export default function Navbar() {
  return (
    <nav className="bg-[#F5F7FA]">
      <Container className="pt-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <div className="flex items-center">
            <img src={logo} alt="Aqari" className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex items-center justify-center gap-10 text-[15px] font-medium text-[#102A43]">
            <a href="#features" className="hover:opacity-80 transition">Features</a>
            <a href="#forwhom" className="hover:opacity-80 transition">For Whom?</a>
            <a href="#pricing" className="hover:opacity-80 transition">Pricing</a>
            <a href="#contact" className="hover:opacity-80 transition">Contact Us</a>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button className="px-5 py-2 rounded-lg border border-[#E6ECF3] bg-white text-[#102A43] shadow-[0_6px_14px_rgba(15,23,42,0.10)] hover:shadow-[0_8px_18px_rgba(15,23,42,0.12)] transition">
              Log In
            </button>

            <button className="px-5 py-2 rounded-lg text-white bg-gradient-to-b from-[#1F3C88] to-[#18346F] shadow-[0_10px_22px_rgba(31,60,136,0.30)] hover:opacity-95 transition">
              Get Started
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}