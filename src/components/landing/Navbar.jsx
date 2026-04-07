import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../layout/Container";
import logo from "../../assets/logo_top.png";

const navLinks = [
  { label: "الصفحة الرئيسية", href: "#home" },
  { label: "لمن هذا النظام؟", href: "#forwhom" },
  { label: "الميزات", href: "#pricing" },
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
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <img src={logo} alt="Aqari" className="h-14 w-auto md:h-16" />
          </div>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigate(link.href)}
                className="text-[16px] font-semibold text-[#1F3C88] transition hover:text-[#102A43]"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/aqari-store")}
              className="hidden rounded-xl bg-[#1F3C88] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(31,60,136,0.22)] transition hover:bg-[#18346F] lg:inline-flex"
            >
             تسوق الان 
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#102A43] transition hover:border-[#1F3C88]/30 hover:text-[#1F3C88] lg:hidden"
              aria-label="Toggle Menu"
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
                navigate("/login");
              }}
              className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#1F3C88] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_22px_rgba(31,60,136,0.22)] transition hover:bg-[#18346F]"
            >
              ابدأ الآن
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}