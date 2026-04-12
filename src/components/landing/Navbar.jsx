import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../layout/Container";
import logo from "../../assets/logo_top.png";

const navLinks = [
  { label: "الصفحة الرئيسية", href: "#home" },
  { label: "لمن هذا النظام؟", href: "#forwhom" },
  { label: "الميزات", href: "#pricing" ,href:"#features"},
  { label: "تواصل معنا", href: "#contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <Container className="py-0">
        <div className="flex h-[70px] items-center justify-between gap-6 overflow-visible">
          
          {/* 🔥 Logo PRO */}
          <div className="relative flex items-center">
            <div className="absolute h-16 w-16 rounded-full bg-[#1F3C88]/20 blur-2xl "></div>

            <img
              src={logo}
              alt="Aqari"
              className="relative h-24 -my-6 w-auto object-contain transition duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigate(link.href)}
                className="relative text-[16px] font-semibold text-[#1F3C88] transition hover:text-[#102A43]"
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 h-[2px] w-0 bg-[#1F3C88] transition-all duration-300 hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/aqari-store")}
              className="hidden rounded-2xl bg-gradient-to-r from-[#1F3C88] to-[#18346F] px-6 py-2.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(31,60,136,0.30)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_16px_40px_rgba(31,60,136,0.35)] lg:inline-flex"
            >
              تسوق الآن
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#102A43] transition hover:border-[#1F3C88]/30 hover:text-[#1F3C88] lg:hidden"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[420px] pt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigate(link.href)}
                  className="w-full rounded-xl px-4 py-3 text-right text-sm font-semibold text-[#102A43] transition hover:bg-slate-50 hover:text-[#1F3C88]"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/aqari-store");
              }}
              className="mt-4 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#1F3C88] to-[#18346F] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_22px_rgba(31,60,136,0.22)] transition hover:scale-[1.02]"
            >
              تسوق الآن
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}